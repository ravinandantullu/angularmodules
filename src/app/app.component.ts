import { Component } from '@angular/core';
import { DateService } from './services/date-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dateService: DateService) { }

  public fromDateChange = (newDate) => {
    this.dateService.fromDate = newDate;
  }

  public toDateChange = (newDate) => {
    this.dateService.toDate = newDate;
  }
}
