import { Injectable }    from '@angular/core';

@Injectable()
export class DailyPlanEntryService {

  private webapiUrlRoot = 'api/';  // URL to web api

  getDailyPlanEntryWebApiUrl() {
  	return webapiUrlRoot + 'dailyplanentry';
  }

  getTeamWebApiUrl() {
  	return webapiUrlRoot + 'team';
  }

  getPersonWebApiUrl() {
  	return webapiUrlRoot + 'person';
  }
}