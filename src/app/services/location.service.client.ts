import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

// injecting the service into module
@Injectable()

export class LocationService {

  constructor(private http: Http) { }

  create() {
    const url = 'http://localhost:3100/api/location';
    return this.http.post(url, '').map((response: Response) => {
      return response.json();
    });
  }

  update(locationId, location) {
    const url = 'http://localhost:3100/api/location/' + locationId;
    return this.http.post(url, location).map((response: Response) => {
      return response.json();
    });
  }

  // getLocationById(scheduleId: string) {
  //   const url = 'http://localhost:3100/api/schedule/' + scheduleId;
  //   return this.http.get(url).map((response: Response) => {
  //     return response.json();
  //   });
  // }

}
