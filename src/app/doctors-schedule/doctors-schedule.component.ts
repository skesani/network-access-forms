import { Component, OnInit } from '@angular/core';
import {DoctorsService} from './DoctorsService';
import {Http} from '@angular/http';

@Component({
  selector: 'app-doctors-schedule',
  templateUrl: './doctors-schedule.component.html',
  styleUrls: ['./doctors-schedule.component.css']
})
export class DoctorsScheduleComponent implements OnInit {

  welcome: string;
  doctorSchedule: any;
  constructor(private doctorService: DoctorsService, private http: Http) {
    this.welcome = 'Doctor Schedule';
    this.getScheduleConfig();
  }

  ngOnInit(): void {
  }

  getScheduleConfig() {
    this.doctorService.getJSON().subscribe(
      docSchedule => {
        this.doctorSchedule = docSchedule;
        console.log(docSchedule);
      });
  }

}
