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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    const new_user = {username: this.username, password: this.password, firstName: this.firstName, age: this.age};
    this.userService.createUser(new_user).subscribe((user) => {
      console.log(user);
    });
  }
}
