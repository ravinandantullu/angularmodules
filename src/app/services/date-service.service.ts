import { Injectable } from '@angular/core';

@Injectable()
export class DateServiceService {
  fromDate = new Date();
  toDate = new Date();

  constructor() { }

}
