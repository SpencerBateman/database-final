import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

// injecting the service into module
@Injectable()

export class MatchService {

  constructor(private http: Http) { }

  //createMatch(userId1, userId2) {
    //let userIds = {user1: userId1, user2: userId2};
    //const url = 'http://localhost:3100/api/like'
    //return this.htpp.post(url, userIds).map((response: Response) => {
      //return response.json();
    //});
  //}
}


