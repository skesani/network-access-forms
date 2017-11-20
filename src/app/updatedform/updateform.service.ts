import { Injectable } from '@angular/core';
import 'rxjs/add/operator/delay';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class TemperatureMonitorService {

  constructor(private http: Http) { }
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});

  tempReadingVal: any[] = [];
  median = 0;

  recordTemperature(temperature) {
      if (!isNaN(temperature )) {
        if (this.tempReadingVal.length <= 7) {
          this.tempReadingVal.push(temperature);
        }
      }
    return this.tempReadingVal;

  }

  getCurrentMedian(numbersArray) {
    const size = numbersArray.length;
    numbersArray.sort();
    console.log(numbersArray);

    if (size % 2 === 0) {
      this.median = (numbersArray[size / 2 - 1] + numbersArray[size / 2]) / 2;
    } else {

      this.median = numbersArray[(size - 1) / 2];
    }

    return this.median;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
