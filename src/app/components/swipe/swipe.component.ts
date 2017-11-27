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
  currentListOfUsers: any;
  potentialMatch : any;

  constructor(private userService : UserService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.userService.findUserById(this.userId).subscribe((user: any) => {
        this.user = user;
        this.userService.getPotentialMatches(this.userId).subscribe((users: any) => {
          this.currentListOfUsers = users;
          console.log(this.currentListOfUsers);
          this.potentialMatch = users[0];
        });
      });
    });
  }
}
