import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { ScheduleService } from '../../services/schedule.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  firstName: string;
  age: number;
  photo: string;
  bio: string;
  gender: string;
  lookingFor: string;
  genders : string[];
  lookingFors : string[];
  errorFlag : boolean;

  constructor(private scheduleService: ScheduleService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.gender = null;
    this.lookingFor = null;
    this.genders = ['Female', 'Male'];
    this.lookingFors = ['Female', 'Male'];
    this.errorFlag = false;
  }

  register() {
    const new_user = {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      age: this.age,
      photo: this.photo,
      bio: this.bio,
      gender: this.gender,
      lookingFor: this.lookingFor,
      schedule: null,
      matches: null,
      likedBy: null,
      likes: null,
      rating: null,
      timesRated: 0,
    };
    console.log('creating user from component');
    if ((new_user['email'] != null || new_user['email'] != '') &&
        (new_user['firstName'] != null || new_user['firstName'] != '') &&
        (new_user['age'] != null || new_user['age'] > 0) &&
        (new_user['bio'] != null || new_user['bio'] != '') &&
        (new_user['gender'] != null || new_user['gender'] != '') &&
        (new_user['lookingFor'] != null || new_user['lookingFor'] != ''))
    {
      this.userService.createUser(new_user).subscribe((user) => {
        this.router.navigate(['user/' + user._id + '/schedule']);
      });
    } else {
      this.errorFlag = true;
    }
  }
}
