import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { MatchService } from '../../services/match.service.client';
import { MessageService } from '../../services/message.service.client';
import { LocationService } from '../../services/location.service.client';

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
  dateLocation : any;
  otherUser: any;
  messages : any;
  message : any;
  rating : number;




  constructor(private userService : UserService, private matchService : MatchService, private locationService : LocationService, private messageService : MessageService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.matchId = params['matchId']
      this.userService.findUserById(this.userId).subscribe((user: any) => {
        this.user = user;
        this.matchService.getMatchById(this.matchId).subscribe((match: any)=> {
          this.match = match;
          if(this.match.user1 == this.userId) {
            this.userService.findUserById(match.user2).subscribe((user1: any)=> {
              this.otherUser = user1;
            });
          } else {
            this.userService.findUserById(match.user1).subscribe((user2: any)=> {
              this.otherUser = user2;
            });
          }
          this.messageService.findMessagesById(this.matchId).subscribe((messages:any)=> {
            this.messages = messages;
            this.locationService.getLocationById(this.match.dateLocation).subscribe((location:any)=> {
              this.dateLocation = location;
            });
          });
        });
      });
    });
  }

  createMessage() {
    const new_message = {
      match: this.matchId,
      sender: this.userId,
      body : this.message,
    };

    this.messageService.createMessage(new_message).subscribe((message) => {
      this.messages.push(message);
      this.message = "";
    });
  }

  submitRating() {
    this.matchService.createRating(this.matchId, this.otherUser._id, this.rating).subscribe(() => {});;
  }
}
