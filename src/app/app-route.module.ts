import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BankaccountComponent} from './Bank/bankaccount/bankaccount.component'
import { ActivatedRoute, Routes, RouterModule, CanActivate } from '@angular/router';

const appRoute: Routes = [

  { path: "", redirectTo: 'accountList', pathMatch: "full" },
  { path: "accountList", component: BankaccountComponent, },
  { path: "accountDetails", component: BankaccountComponent, },
]


@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRouteModule { }
