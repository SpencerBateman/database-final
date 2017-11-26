import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

// injecting the service into module
@Injectable()

export class DayService {

  constructor(private http: Http) { }

  getDayById(dayId: string) {
    const url = 'http://localhost:3100/api/day/' + dayId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateDay(dayId: string, day: any) {
    console.log(dayId);
    const url = 'http://localhost:3100/api/day/' + dayId;
    return this.http.put(url, day).map((response: Response) => {
      return response.json();
    });
  }
}

