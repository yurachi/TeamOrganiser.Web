import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { DailyPlanEntry } from '../models/dailyplanentry/dailyplanentry';

@Injectable()
export class DailyPlanEntryService {

  private webapiUrl = 'api/dailyplanentry';  // URL to web api

  constructor(private http: Http, private configService : ConfigService) {
    this.webapiUrl = configService.getDailyPlanEntryWebApiUrl();
   }

  getDailyPlanEntries() {
    return this.http.get(this.webapiUrl)
               .toPromise()
               .then(response => response.json().data as DailyPlanEntry[])
               .catch(this.handleError);
  }

  save(entry: DailyPlanEntry): Promise<DailyPlanEntry>  {
    if (entry.EntryID) {
      return this.put(entry);
    }
  }

  private put(entry: DailyPlanEntry) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.webapiUrl}/${entry.EntryID}`;
    return this.http
               .put(url, JSON.stringify(entry), {headers: headers})
               .toPromise()
               .then(() => entry)
               .catch(this.handleError);
  }
  
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
