import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { MatchService } from '../../services/match.service.client';
import { MessageService } from '../../services/message.service.client';

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
  otherUser: any;
  messages : any;
  message : any;




  constructor(private userService : UserService, private matchService : MatchService, private messageService : MessageService, private router : Router, private activatedRoute: ActivatedRoute) { }

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
            console.log(this.messages);
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

    console.log('creating message from component');
    this.messageService.createMessage(new_message).subscribe((message) => {
      console.log(message);
      this.messages.push(message);
    });
  }
  }
