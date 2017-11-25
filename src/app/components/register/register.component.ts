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

  constructor(private scheduleService: ScheduleService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    const new_user = {username: this.username, password: this.password, firstName: this.firstName, age: this.age};
    this.userService.createUser(new_user).subscribe((user) => {
      console.log('hello');
      let init_schedule = {_user: user};
      this.scheduleService.createSchedule(init_schedule).subscribe((schedule) => {
        console.log('schedule return');
        user.schedule = schedule;
        this.userService.updateUser(user._id, user).subscribe((final_user) => {
          this.router.navigate(['user/' + user._id + '/schedule']);
        });
      });
    });
  }
}
