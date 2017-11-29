import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { ScheduleService } from '../../services/schedule.service.client';
import { DayService } from '../../services/day.service.client';

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
  monday: any;
  mondayId: string;
  tuesday: any;
  tuesdayId: string;
  wednesday: any;
  wednesdayId: string;
  thursday: any;
  thursdayId: string;
  friday: any;
  fridayId: string;
  saturday: any;
  saturdayId: string;
  sunday: any;
  sundayId: string;

  constructor(private dayService : DayService, private userService : UserService, private scheduleService : ScheduleService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.userService.findUserById(this.userId).subscribe((user: any) => {
        this.user = user;
        this.scheduleId = user.schedule;
        this.scheduleService.getScheduleById(user.schedule).subscribe((schedule: any) => {
          this.schedule = schedule;
          this.mondayId = this.schedule.mon;
          this.tuesdayId = this.schedule.tue;
          this.wednesdayId = this.schedule.wed;
          this.thursdayId = this.schedule.thu;
          this.fridayId = this.schedule.fri;
          this.saturdayId = this.schedule.sat;
          this.sundayId= this.schedule.sun;
          this.dayService.getDayById(this.mondayId).subscribe((mon: any) => {
            this.monday = mon;
          });
          this.dayService.getDayById(this.tuesdayId).subscribe((tue: any) => {
            this.tuesday = tue;
          });
          this.dayService.getDayById(this.wednesdayId).subscribe((wed: any) => {
            this.wednesday = wed;
          });
          this.dayService.getDayById(this.thursdayId).subscribe((thu: any) => {
            this.thursday = thu;
          });
          this.dayService.getDayById(this.fridayId).subscribe((fri: any) => {
            this.friday = fri;
          });
          this.dayService.getDayById(this.saturdayId).subscribe((sat: any) => {
            this.saturday = sat;
          });
          this.dayService.getDayById(this.sundayId).subscribe((sun: any) => {
            this.sunday = sun;
          });
        });
      });
    });
  }

  saveSchedule() {
    this.dayService.updateDay(this.mondayId, this.monday).subscribe((mon: any) => {
      this.dayService.updateDay(this.tuesdayId, this.tuesday).subscribe((tue: any) => {
        this.dayService.updateDay(this.wednesdayId, this.wednesday).subscribe((wed: any) => {
          this.dayService.updateDay(this.thursdayId, this.thursday).subscribe((thu: any) => {
            this.dayService.updateDay(this.fridayId, this.friday).subscribe((fri: any) => {
              this.dayService.updateDay(this.saturdayId, this.saturday).subscribe((sat: any) => {
                this.dayService.updateDay(this.sundayId, this.sunday).subscribe((sun: any) => {
                  this.router.navigate(['user/' + this.user._id]);
                });
              });
            });
          });
        });
      });
    });
  }
}
