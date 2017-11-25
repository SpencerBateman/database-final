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
  username: string;
  password: string;
  firstName: string;
  age: number;
  bio: string;
  gender: string;
  lookingFor: string;
  genders : string[];
  lookingFors : string[];

  constructor(private scheduleService: ScheduleService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.gender = null;
    this.lookingFor = null;
    this.genders = ['Female', 'Male'];
    this.lookingFors = ['Female', 'Male'];
  }

  register() {
    const new_user = {
      email: this.username,
      password: this.password,
      firstName: this.firstName,
      age: this.age,
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
    this.userService.createUser(new_user).subscribe((user) => {

      // let init_schedule = {_user: user};
      // this.scheduleService.createSchedule(init_schedule).subscribe((schedule) => {
      //   console.log('schedule return');
      //   user.schedule = schedule;
      //   this.userService.updateUser(user._id, user).subscribe((final_user) => {
      //     this.router.navigate(['user/' + user._id + '/schedule']);
      //   });
      // });
    });
  }
}
