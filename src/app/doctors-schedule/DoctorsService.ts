import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DoctorsService {

  constructor(private http: Http) {
  }

  public getJSON() {
    return this.http.get('assets/doctorData.json')
      .map(res => res.json())
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
