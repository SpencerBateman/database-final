import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { LocationService } from '../../services/location.service.client';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.css']
})

export class SwipeComponent implements OnInit {
  userId: string;
  user: any;
  currentListOfUsersWithTimes: any;
  potentialMatch : any;
  pmIndex: number;
  newMatch : any;
  dateLocation : any;

  constructor(private userService : UserService, private locationService : LocationService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pmIndex = 0;
    this.newMatch = null;
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.userService.findUserById(this.userId).subscribe((user: any) => {
        this.user = user;
        this.userService.getPotentialMatches(this.userId).subscribe((users: any) => {
          this.currentListOfUsersWithTimes = users;
          this.potentialMatch = this.currentListOfUsersWithTimes[this.pmIndex];
        });
      });
    });
  }

  like() {
    this.userService.like(this.userId, this.potentialMatch.user).subscribe((response) => {
      if (Object.keys(response).length != 0) {
        this.newMatch = this.potentialMatch.user;
        this.locationService.getLocationById(response.dateLocation).subscribe((location:any)=> {
          this.dateLocation = location;
        });
      }
      this.pmIndex += 1;
      this.potentialMatch = this.currentListOfUsersWithTimes[this.pmIndex]
    });
  }

  skip() {
    this.pmIndex += 1;
    this.potentialMatch = this.currentListOfUsersWithTimes[this.pmIndex]
  }

  resetNewMatch() {
    this.newMatch = null;
  }
}
