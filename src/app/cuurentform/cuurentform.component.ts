import {Component, ElementRef, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cuurentform',
  templateUrl: './cuurentform.component.html',
  styleUrls: ['./cuurentform.component.css']
})
export class CuurentformComponent implements OnInit {
  empVal: any;
  jobtitle = ['*Choose One*', 'Admin - Accountant', 'Admin - CEO', 'Admin - CFO', 'Admin - CIO', 'Admin - COO', 'Admin - Intern',
    'Anesthesiologist', 'Central Sterile Technician', 'Communications Specialist', 'Gynecologist', 'IT - Applications Specialist',
    'IT - Intern', 'IT - Manager', 'IT - System Engineer', 'IT - Technicial Support', 'Medical Records Specialist', 'Nurse - ASC',
    'Nurse - Office', 'Nurse Practitioner ', 'Pathologist', 'Patient Accounting - Coder', 'Patient Accounting - Insurance',
     'Patient Accounting - Pre-Cert ', 'Patient Representative', 'Phlebotomist', 'Physical Therapist', 'Physician Assistant',
    'Privacy Officer', 'Rad - CT Technician', 'Rad - X-Ray Technician', 'Radiologist ', 'Research - Intern', 'Scheduler - ASC',
    'Scheduler - Office', 'Urologist'];
  department = ['Administration', 'Appointments', 'Checkout', 'Greeter', 'Home', 'IT Department', 'Laboratory', 'Management Staff',
    'Medical Records', 'Nurse', 'Nurse Manager', 'PACU', 'PACU Nurse', 'Pathology', 'Patient Accounting', 'Personnal', 'Phone Nurse',
    'Physician', 'Portal', 'Radiology', 'Registration/Check-In', 'Research', 'Scheduling', 'Switchboard', 'Transcription'];
  employment = ['Employee', 'Contractor', 'Temporary'];
  employmentKind = ['New', 'Existing'];
  empType = ['Full-Time', 'Part-Time', 'PRN'];
  constructor() { }

  ngOnInit() {
    this.empVal = 'Employee';
  }
  onSubmit(form: NgForm) {
  console.log(form);
  }
  toNumber() {
    console.log(this.empVal);
  }

}
