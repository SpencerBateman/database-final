import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { ScheduleService } from '../../services/schedule.service.client';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  userId: string;
  user: any;
  scheduleId: string;
  schedule: any;

  constructor(private userService : UserService, private scheduleService : ScheduleService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.userService.findUserById(this.userId).subscribe((user: any) => {
        this.user = user;
        this.scheduleId = user.schedule;
        this.scheduleService.getScheduleById(user.schedule).subscribe((schedule: any) => {
          console.log(user);
          console.log(schedule);
        });
      });
    });
  }

  saveSchedule() {
    this.scheduleService.updateSchedule(this.scheduleId, this.schedule).subscribe((schedule: any) => {
      console.log(schedule);
    });
  }
}
