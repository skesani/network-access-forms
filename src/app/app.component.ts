import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { CustomValidators } from './validators/custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  private myForm: FormGroup;
  entries = [];
  selectedEntry: { [key: string]: any } = {
    value: null,
    description: null
  };
  constructor() {
  }

  removePhone(i: number) {
    (<FormArray>this.myForm.controls.phoneNumbers).removeAt(i);
  }

  addPhone() {
    (<FormArray>this.myForm.controls.phoneNumbers).push(this.buildPhoneNumberComponent());
  }

  buildPhoneNumberComponent() {
    return new FormControl('', [Validators.required, CustomValidators.telephoneNumber]);
  }

  printMyForm() {
    console.log(this.myForm);
  }

  register(myForm: NgForm) {
    console.log('Registration successful.');
    console.log(myForm.value);
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name': new FormControl('', Validators.required, CustomValidators.uniqueName),
      'birthYear': new FormControl('', [Validators.required, CustomValidators.birthYear]),
      'location': new FormGroup({
        'country': new FormControl('', Validators.required),
        'city': new FormControl()
      }, CustomValidators.countryCity),
      'phoneNumbers': new FormArray([this.buildPhoneNumberComponent()], CustomValidators.telephoneNumbers),
      'gender': new FormControl('', [Validators.required, CustomValidators.selectGender])
    });
    this.entries = [
      {
        description: 'Male',
        value: 'M'
      },
      {
        description: 'Female',
        value: 'F'
      }
    ];

    // select the first one
    if (this.entries) {
      this.onSelectionChange(this.entries[0]);
    }

  }

  onSelectionChange(entry) {
    // clone the object for immutability
    this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
  }
}

