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
  firstName: string;
  lookingFor: string;
  photo: string;
  genders : string[];
  lookingFors : string[];
  email: string;
  age: string;
  bio: string;
  errorFlag : boolean;

  constructor(private userService : UserService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.userService.findUserById(this.userId).subscribe((user: any) => {
        this.user = user;
        this.updateGenders();
        this.firstName = user.firstName;
      });
    });
    this.errorFlag = false;
  }

  updateGenders() {
    this.gender = this.user.gender;
    this.lookingFor = this.user.lookingFor;
    this.genders = ['Female', 'Male'];
    this.lookingFors = ['Female', 'Male'];
  }

  saveChanges() {
    if ((this.email != null || this.email != '') &&
        (this.firstName != null || this.firstName != '') &&
        (this.age != null || this.age != '') &&
        (this.bio != null || this.bio != '') &&
        (this.gender != null || this.gender != '') &&
        (this.lookingFor != null || this.lookingFor != ''))
    {
      this.user.email = this.email;
      this.user.firstName = this.firstName;
      this.user.age = this.age;
      this.user.bio = this.bio;
      this.user.gender = this.gender;
      this.user.lookingFor = this.lookingFor;
    } else {
      this.errorFlag = true;
    }
  }

  updateUser() {
    this.saveChanges();
    this.userService.updateUser(this.userId, this.user).subscribe(() => {
      this.router.navigate(['user/' + this.user._id]);
    });
  }

  editSchedule() {
    this.saveChanges();
    this.userService.updateUser(this.userId, this.user).subscribe(() => {
      this.router.navigate(['user/' + this.user._id + '/schedule']);
    });
  }
}
