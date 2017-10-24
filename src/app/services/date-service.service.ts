import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
  fromDate = new Date();
  toDate = new Date();

  constructor() { }

}
