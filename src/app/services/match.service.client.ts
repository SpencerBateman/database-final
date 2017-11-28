import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

// injecting the service into module
@Injectable()

export class MatchService {

  constructor(private http: Http) { }

  // this has to be a post method to have a body payload
  getMatchListByIds(matchIds) {
    const url = 'http://localhost:3100/api/match/getList';
    return this.http.post(url, matchIds).map((response: Response) => {
      return response.json();
    });
  }
}


