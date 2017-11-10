import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveapproach',
  templateUrl: './reactiveapproach.component.html',
  styleUrls: ['./reactiveapproach.component.css']
})
export class ReactiveapproachComponent implements OnInit {
  networkAccess: FormGroup;
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
  yesNo = ['Yes', 'No'];
  employeeType = ['Full-Time', 'Part-Time', 'PRN'];
  emailGroupAccess = ['Add', 'Remove'];
  typeOfAccess = ['Grant-Access', 'Remove-Access', 'Modify Access'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.networkAccess =  this.fb.group({
      'contractorInfo': new FormGroup({
        'baa': new FormControl(null , Validators.required),
        'reqContractDate' : new FormControl(null)
      }),
      'securityEmailInfo': new FormGroup({
        'networkAccount': new FormControl(null),
        'email': new FormControl(null),
        'vpn': new FormControl(null),
        'networkAccountAccess': new FormControl(null),
        'emailAccess': new FormControl(null),
        'vpnAccess': new FormControl(null),
        'similarUser': new FormControl(null),
        'miscSecurity': new FormControl(null)
      }),
      ehrAccess: new FormGroup({
        similarEhrUser: new FormControl(null),
        miscEhrNeed: new FormControl(null)
      }),
      /*emailGroups: this.fb.array([this.initEmailGroup(), ]),*/
      fname: new FormControl(null, Validators.required),
      'lname': new FormControl(null, Validators.required),
      'mname': new FormControl(null, Validators.required),
      'jobtitle': new FormControl(null, Validators.required),
      'department': new FormControl(null, Validators.required),
      'supervisor': new FormControl(null, Validators.required),
      'employment': new FormControl(null),
      'empkind': new FormControl('New'),
      'empType': new FormControl(null),
      'reqDate': new FormControl(null),
      'securityEmail': new FormControl(null),
      'electronicAccess': new FormControl(null)

    });
  }
  onSubmit() {
    console.log(this.networkAccess);
    console.log(this.networkAccess.get('employment').value);
  }

}
