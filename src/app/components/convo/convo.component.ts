import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { MatchService } from '../../services/match.service.client';

@Component({
  selector: 'app-convo',
  templateUrl: './convo.component.html',
  styleUrls: ['./convo.component.css']
})
export class ConvoComponent implements OnInit {
  userId: string;
  user: any;
  matchId: string;
  match: any;


  constructor(private userService : UserService, private matchService : MatchService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.matchId = params['matchId']
      this.userService.findUserById(this.userId).subscribe((user: any) => {
        this.user = user;
        this.matchService.getMatchById(this.matchId).subscribe((match: any)=> {
          this.match = match;
          console.log(match);
        });
      });
    });
  }
}
