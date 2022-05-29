import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {MenuComponent} from './menu/menu.component';
import {AppRoutingModule} from './app-routing.module';
import {CustomersDashboardComponent} from './customers-dashboard/customers-dashboard.component';
import {OffersDashboardComponent} from './offers-dashboard/offers-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomersDashboardComponent,
    OffersDashboardComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
