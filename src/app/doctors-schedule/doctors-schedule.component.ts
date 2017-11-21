import { Component, OnInit } from '@angular/core';
import {DoctorsService} from './DoctorsService';
import {Http} from '@angular/http';

@Component({
  selector: 'app-doctors-schedule',
  templateUrl: './doctors-schedule.component.html',
  styleUrls: ['./doctors-schedule.component.css']
})
export class DoctorsScheduleComponent implements OnInit {
  currentJustify = 'start';
  welcome: string;
  doctorScheduleRobot1: any;
  doctorScheduleRobot2: any;
  doctors: any;
  constructor(private doctorService: DoctorsService, private http: Http) {
    this.welcome = 'Doctor Schedule';
    this.getScheduleConfig();
    this.getScheduleConfigRobot2();
    this.doctors = ['Timothy Bradford', 'Blake Moore',	'Meghana Gowda',	'Jason Szobota',
      'Eric Cote',	'Kinloch Nelson',	'Charlie Jung',	'Cameron Barnes',
      'Michael Franks',	'Robert Nelson',	'Mark Monahan',	'David Miller',
      'David Glazier',	'Bruce Rowe'];
  }

  ngOnInit(): void {}

  getScheduleConfig() {
    this.doctorService.getJSONForRobot1().subscribe(
      docSchedule => {
        this.doctorScheduleRobot1 = docSchedule;
        console.log(docSchedule);
      });
  }

  getScheduleConfigRobot2() {
    this.doctorService.getJSONForRobot2().subscribe(
      docSchedule => {
        this.doctorScheduleRobot2 = docSchedule;
        console.log(docSchedule);
      });
  }

}
