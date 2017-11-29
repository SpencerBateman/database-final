import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service.client';

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

  constructor(private userService : UserService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pmIndex = 0;
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
    console.log(this.potentialMatch.user);
    this.userService.like(this.userId, this.potentialMatch.user).subscribe(() => {
      this.pmIndex += 1;
      this.potentialMatch = this.currentListOfUsersWithTimes[this.pmIndex]
    });
  }

  skip() {
    this.pmIndex += 1;
    this.potentialMatch = this.currentListOfUsersWithTimes[this.pmIndex]
  }
}
