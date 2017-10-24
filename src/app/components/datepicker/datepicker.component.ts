import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Input() public dateFromOnChange: any;
  @Input() public dateToOnChange: any;
  @Input() public fromDateTime = new Date(moment().subtract(7, 'd').format('MMM YYYY DD'));;
  @Input() public toDateTime = new Date(moment().subtract(1, 'd').format('MMM YYYY DD'));
  public minToDate = new Date(this.fromDateTime);
  public maxToDate = new Date();
  public maxFromDate = new Date(this.toDateTime);

  constructor() { }

  ngOnInit() { }

  onChangeFromDate(event) {
    this.fromDateTime = new Date(event);
    this.dateFromOnChange(this.fromDateTime);
    this.setMaxMin();
  }

  onChangeToDate(event) {
    this.toDateTime = new Date(event);
    this.dateToOnChange(this.toDateTime);
    this.setMaxMin();
  }

  private setMaxMin() {
    this.minToDate = new Date(this.fromDateTime);
    this.maxFromDate = new Date(this.toDateTime);
  }

}
