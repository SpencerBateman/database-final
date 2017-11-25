import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

// injecting the service into module
@Injectable()

export class ScheduleService {

  constructor(private http: Http) { }

  createSchedule(schedule: any) {
    console.log("hello client!")
    console.log(schedule);
    const url = 'http://localhost:3100/api/schedule';
    return this.http.post(url, schedule).map((response: Response) => {
      return response.json();
    });
  }

  getScheduleById(scheduleId: string) {
    console.log(scheduleId);
    const url = 'http://localhost:3100/api/schedule/' + scheduleId;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  }

  //// returns the user in local users array whose username matches the parameter username
  //findUserByUsername(username: string) {
    //const url = 'http://localhost:3100/api/user?username=' + username;
    //return this.http.get(url).map((response: Response) => {
      //return response.json();
    //});
  //}

  ////returns the user whose username and password match the username and password parameters
  //findUserByCredentials(username: string, password: string) {
    //var url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;

    //return this.http.get(url).map((response: Response) => {
      //return response.json();
    //});
  //}

  //createUser(user: any) {
    //console.log('client service print: ' + user);
    //const url = 'http://localhost:3100/api/user';
    //return this.http.post(url, user).map((response: Response) => {
      //return response.json();
    //});
  //}
}

