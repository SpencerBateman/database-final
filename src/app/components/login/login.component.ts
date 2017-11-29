import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errorFlag: boolean;

  //@ViewChild('f') loginForm: NgForm;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
  }

    login(): void {
    const user = this.userService.findUserByCredentials(this.email, this.password).subscribe((user: any) => {
      if (user != null && this.email === user.email && this.password === user.password) {
        this.router.navigate(['user/' + user._id]);
      } else {
        this.errorFlag = true;
      }
    });
  }
}
