import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { states } from './data-model';

@Component({
  selector: 'app-react-form-select',
  templateUrl: './react-form-select.component.html',
  styleUrls: ['./react-form-select.component.css']
})
export class ReactFormSelectComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  heroForm: FormGroup;
  states = states;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({ // <-- the parent FormGroup
      name: ['', Validators.required ],
      address: this.fb.group({ // <-- the child FormGroup
        street: '',
        city: '',
        state: '',
        zip: ''
      }),
      power: '',
      sidekick: ''
    });
  }
}

