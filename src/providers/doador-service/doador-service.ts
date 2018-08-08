import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DoadorServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DoadorServiceProvider Provider');
  }

}
