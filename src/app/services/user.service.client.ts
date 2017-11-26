import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

// injecting the service into module
@Injectable()

export class UserService {

  constructor(private http: Http) { }

  getPotentialMatches(userId: string) {
    const url = 'http://localhost:3100/api/user/suitors/' + userId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findUserById(userId: string) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateUser(userId: string, user: any) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.put(url, user).map((response: Response) => {
      return response.json();
    });
  }

  // returns the user in local users array whose username matches the parameter username
  findUserByUsername(username: string) {
    const url = 'http://localhost:3100/api/user?username=' + username;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  //returns the user whose username and password match the username and password parameters
  findUserByCredentials(username: string, password: string) {
    var url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;

    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  createUser(user: any) {
    console.log('client service print: ');
    const url = 'http://localhost:3100/api/user';
    return this.http.post(url, user).map((response: Response) => {
      return response.json();
    });
  }
}
