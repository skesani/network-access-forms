import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray, FormBuilder} from '@angular/forms';
import { Jobtitle } from '../shared/jobtitle.model';
import { EmpType } from '../shared/emptype.model';
import {EmpOption} from '../shared/empoption.model';
import {Address, Email} from './customer.interface';
@Component({
  selector: 'app-updatedform',
  templateUrl: './updatedform.component.html',
  styleUrls: ['./updatedform.component.css']
})
export class UpdatedformComponent implements OnInit {

  public networkaccessForm: FormGroup;

  addresses: Address[];

  emailGroup: Email[];



  jobtitle: Jobtitle[];
  // empType: EmpType[] = [{empTypeVal: 'Employee'}, {empTypeVal: 'Contractor'}, {empTypeVal: 'Temporary'}];
  empType: Array<Object> = [{empTypeVal: 'Employee'}, {empTypeVal: 'Contractor'}, {empTypeVal: 'Temporary'}];
  empOptions = ['New', 'Existing'];
  access = ['Read-Only', 'Modify', 'Full-Access', 'Remove Access'];
  ehrAccess = ['Grant Access', 'Change Access', 'RemoveAccess'];
  empVal: any;

  states = ['CA', 'MD', 'OH', 'VA', 'DC', 'NY'];

  constructor(private fb: FormBuilder) {
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
    this.createForm();

  }

  createForm() {
    this.networkaccessForm = this.fb.group({ // <-- the parent FormGroup
     /* name: ['', Validators.required ],*/
      /*address: this.fb.group({ // <-- the child FormGroup
        street: '',
        city: '',
        state: '',
        zip: ''
      }),*/
      state: '',
     /* emailGroup: new FormArray([]),*/
      drives: new FormArray([])
    });
  }

  ngOnInit() {
    /*this.networkaccessForm = new FormGroup({
      'emailGroup': new FormArray([]),
      'drives': new FormArray([])
    });*/

    this.networkaccessForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this.fb.array([
        this.initAddress(),
      ]),

      emailGroup: this.fb.array([
        this.initEmail(),
      ])

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
    const control = <FormArray>this.networkaccessForm.controls['emailGroup'];
    control.push(this.initEmail());

  }
  onAddButton() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.networkaccessForm.get('drives')).push(control);
  }

  initAddress() {
    return this.fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  initEmail() {
    return this.fb.group({
      email: ['', Validators.required],
    });
  }

  addAddress() {
    const control = <FormArray>this.networkaccessForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.networkaccessForm.controls['addresses'];
    control.removeAt(i);
  }

  removeEmail(i: number) {
    const control = <FormArray>this.networkaccessForm.controls['emailGroup'];
    control.removeAt(i);
  }


}
