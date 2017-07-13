import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {NewsDashboard} from './SportsNews/NewsDashboard.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
    AppComponent,
    NewsDashboard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }