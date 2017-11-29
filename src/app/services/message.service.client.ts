import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

// injecting the service into module
@Injectable()

export class MessageService {

  constructor(private http: Http) { }

  createMessage(message: any) {
    console.log('client service print: ');
    const url = 'http://localhost:3100/api/message';
    return this.http.post(url, message).map((response: Response) => {
      return response.json();
    });
  }

  findMessagesById(matchId: string) {
    const url = 'http://localhost:3100/api/message/' + matchId;
    console.log(matchId);
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }
}
