import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { MatchService } from '../../services/match.service.client';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  userId: string;
  user: any;
  matchesIds: any;
  matches: any;

  constructor(private userService : UserService, private matchService : MatchService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.userService.findUserById(this.userId).subscribe((user: any) => {
        this.user = user;
        this.matchesIds = user.matches;
        this.matchService.getMatchListByIds(this.matchesIds).subscribe((matches: any)=> {
          this.matches = matches;
        });
      });
    });
  }
}
