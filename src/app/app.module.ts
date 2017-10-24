import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*
Angular Material 2
*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';

/*
 Services
*/
import { DateService } from './services/date-service.service';

/*
 Components
*/
import { AppComponent } from './app.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
  ],
  providers: [
    DateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
