import { Injectable }    from '@angular/core';

import { DailyPlanEntry } from '../models/dailycount/dailycount';

@Injectable()
export class DailyCountService {

  private webapiUrl = 'api/dailycount';  // URL to web api

  constructor(private http: Http, private configService : ConfigService) {
    this.webapiUrl = configService.getDailyCountWebApiUrl();
   }

  getDailyCounts() {
    return this.http.get(this.webapiUrl)
               .toPromise()
               .then(response => response.json().data as DailyCount[])
               .catch(this.handleError);
  }

