import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DayService } from '../../services/day.service.client';
import { ScheduleService } from '../../services/schedule.service.client';
import { LocationService } from '../../services/location.service.client';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location: any;
  locationId: string;
  locName: string;
  locUrl: string;
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

  constructor(private locationService : LocationService, private dayService : DayService, private scheduleService : ScheduleService, private router : Router) { }

  ngOnInit() {
    this.locationService.create().subscribe((location) => {
      this.location = location;
      this.scheduleService.getScheduleById(this.location.schedule).subscribe((schedule) => {
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
  }

  createLocation() {
    //ADD NAME & URL TO LOCATION
    //GET RANDOM LOCATION WHEN MATCH CREATED
    // ADD TIME / LOCATION TO MATCH CONVO PAGE
    this.dayService.updateDay(this.mondayId, this.monday).subscribe((mon: any) => {
      this.dayService.updateDay(this.tuesdayId, this.tuesday).subscribe((tue: any) => {
        this.dayService.updateDay(this.wednesdayId, this.wednesday).subscribe((wed: any) => {
          this.dayService.updateDay(this.thursdayId, this.thursday).subscribe((thu: any) => {
            this.dayService.updateDay(this.fridayId, this.friday).subscribe((fri: any) => {
              this.dayService.updateDay(this.saturdayId, this.saturday).subscribe((sat: any) => {
                this.dayService.updateDay(this.sundayId, this.sunday).subscribe((sun: any) => {

                  this.location.name = this.locName;
                  this.location.url = this.locUrl;
                  this.locationService.update(this.locationId, this.location).subscribe((location) => {
                    console.log('location added');
                  });
                });
              });
            });
          });
        });
      });
    });
  }
}
