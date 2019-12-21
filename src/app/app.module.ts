import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankaccountComponent } from './Bank/bankaccount/bankaccount.component';
import { AppRouteModule } from './app-route.module';
import {BankaccountdetailsService} from './Bank/bankaccountdetails.service';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BankaccountComponent,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouteModule,
    HttpClientModule
  ],
  providers: [BankaccountdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
