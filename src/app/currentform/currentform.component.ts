import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currentform',
  templateUrl: './currentform.component.html',
  styleUrls: ['./currentform.component.css']
})
export class CurrentformComponent implements OnInit {
  empType: Array<Object> = [{empTypeVal: 'Employee'}, {empTypeVal: 'Contractor'}, {empTypeVal: 'Temporary'}];
  empVal: any;

  constructor() { }
  ngOnInit() {
  }

}
