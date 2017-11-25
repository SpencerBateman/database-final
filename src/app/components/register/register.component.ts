import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service.client';

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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.gender = null;
    this.lookingFor = null;
    this.genders = ['Female', 'Male'];
    this.lookingFors = ['Female', 'Male'];
  }

  register() {
    const new_user = {username: this.username, password: this.password, firstName: this.firstName, age: this.age, bio: this.bio, gender: this.gender, lookingFor: this.lookingFor};
    this.userService.createUser(new_user).subscribe((user) => {
        this.router.navigate(['user/' + user._id]);
    });
  }
}
