import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service.client'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  userId: string;
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.userService.findUserById(this.userId).subscribe((user: any) => {
        this.user = user;
        console.log(user);
      });
    });
  }
}
