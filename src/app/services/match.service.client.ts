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

  getMatchById(matchId) {
    const url = 'http://localhost:3100/api/match/' + matchId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  getUserListFromMatches(userId, matchIds) {
    const url = 'http://localhost:3100/api/match/users/' + userId;
    return this.http.post(url, matchIds).map((response: Response) => {
      return response.json();
    });
  }

  createRating(matchId, otherUserId, rating) {
    const url = 'http://localhost:3100/api/match/rating';
    let req = {matchId: matchId, otherUserId: otherUserId, rating: rating};
    return this.http.post(url, req).map((response: Response) => {
      return response.json();
    })
  }
}
