import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

// injecting the service into module
@Injectable()

export class UserService {

  constructor(private http: Http) { }

  findUserById(userId: string) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  createUser(user: any) {
    const url = 'http://localhost:3100/api/user';
    return this.http.post(url, user).map((response: Response) => {
      return response.json();
    });
  }
}
