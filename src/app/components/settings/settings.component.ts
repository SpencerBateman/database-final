import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service.client';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
  userId: string;
  user: any;
  gender: string;
  lookingFor: string;
  genders : string[];
  lookingFors : string[];

  constructor(private userService : UserService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.userService.findUserById(this.userId).subscribe((user: any) => {
        this.user = user;
        console.log(user);
        this.updateGenders();
      });
    });
  }

  updateGenders() {
    this.gender = this.user.gender;
    this.lookingFor = this.user.lookingFor;
    this.genders = ['Female', 'Male'];
    this.lookingFors = ['Female', 'Male'];
  }
}
