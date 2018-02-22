import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UtilityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UtilityProvider {

  constructor(public http: Http) {
    console.log('Hello UtilityProvider Provider');
  }
  static filterTime(seconds): string {
    let min: number = Math.floor(seconds / 60);
    let sec: number = seconds % 60;
    if (sec < 10) {
      return min + ":0" + sec;
    }
    else {
      return min + ":" + sec;
    }
  }
}
