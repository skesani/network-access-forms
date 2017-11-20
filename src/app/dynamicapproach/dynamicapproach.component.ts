import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamicapproach',
  templateUrl: './dynamicapproach.component.html',
  styleUrls: ['./dynamicapproach.component.css']
})
export class DynamicapproachComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this._fb.array([
        this.initAddress(),
      ])
    });
  }

  initAddress() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }

  save() {
    // call API to save
    // ...
    console.log('saved');
  }
}
