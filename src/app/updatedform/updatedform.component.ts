import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import { Jobtitle } from '../shared/jobtitle.model';
import { EmpType } from '../shared/emptype.model';
import {EmpOption} from '../shared/empoption.model';
@Component({
  selector: 'app-updatedform',
  templateUrl: './updatedform.component.html',
  styleUrls: ['./updatedform.component.css']
})
export class UpdatedformComponent implements OnInit {
  networkaccessForm: FormGroup;
  jobtitle: Jobtitle[];
  // empType: EmpType[] = [{empTypeVal: 'Employee'}, {empTypeVal: 'Contractor'}, {empTypeVal: 'Temporary'}];
  empType: Array<Object> = [{empTypeVal: 'Employee'}, {empTypeVal: 'Contractor'}, {empTypeVal: 'Temporary'}];
  empOptions = ['New', 'Existing'];
  access = ['Read-Only', 'Modify', 'Full-Access', 'Remove Access'];
  ehrAccess = ['Grant Access', 'Change Access', 'RemoveAccess'];
  empVal: any;

  constructor() {
    this.jobtitle = [
      {title: '*Choose One*'},
      {title: 'Admin - Accountant'},
      {title: 'Admin - CEO'},
      {title: 'Admin - CFO'},
      {title: 'Admin - CIO'},
      {title: 'Admin - COO'},
      {title: 'Admin - Intern'},
      {title: 'Anesthesiologist'},
      {title: 'Central Sterile Technician'},
      {title: 'Communications Specialist'},
      {title: 'Gynecologist'},
      {title: 'IT - Applications Specialist'},
      {title: 'IT - Intern'},
      {title: 'IT - Manager'},
      {title: 'IT - System Engineer'},
      {title: 'IT - Technicial Support'},
      {title: 'Medical Records Specialist'},
      {title: 'Nurse - ASC'},
      {title: 'Nurse - Office'},
      {title: 'Nurse Practitioner '},
      {title: 'Pathologist'},
      {title: 'Patient Accounting - Coder'},
      {title: 'Patient Accounting - Insurance'},
      {title: 'Patient Accounting - Pre-Cert '},
      {title: 'Patient Representative'},
      {title: 'Phlebotomist'},
      {title: 'Physical Therapist'},
      {title: 'Physician Assistant'},
      {title: 'Privacy Officer'},
      {title: 'Rad - CT Technician'},
      {title: 'Rad - X-Ray Technician'},
      {title: 'Radiologist '},
      {title: ' Research - Intern'},
      {title: 'Scheduler - ASC'},
      {title: 'Scheduler - Office'},
      {title: 'Urologist'}
    ];


  }

  ngOnInit() {
    this.networkaccessForm = new FormGroup({
      'emailGroup': new FormArray([]),
      'drives': new FormArray([])
    });
    this.empVal = 'Employee';
  }
  onSubmit() {
    console.log(this.networkaccessForm);
  }
  toNumber() {
    console.log(this.empVal);
  }
  onAddEmailGroup() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.networkaccessForm.get('emailGroup')).push(control);
  }
  onAddButton() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.networkaccessForm.get('drives')).push(control);
  }
}
