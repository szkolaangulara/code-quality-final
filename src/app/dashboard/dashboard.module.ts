import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarCardComponent} from './car-card/car-card.component';
import {DashboardComponent} from './dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {InputComponent} from '../shared/input/input.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CarCardComponent,
    DashboardComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    CarCardComponent
  ]
})
export class DashboardModule {
}
