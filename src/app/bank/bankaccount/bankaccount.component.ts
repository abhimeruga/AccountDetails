import { Component, OnInit } from '@angular/core';
import { BankaccountdetailsService } from '../bankaccountdetails.service'

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css']
})
export class BankaccountComponent implements OnInit {

  constructor(private bad: BankaccountdetailsService) { }
  public accountDetails = [];
  public displayPage = [];
  public toTalPages = 0;
  public curentPage = 0;


     public items = [];
    public pageOfItems: Array<any>;

    
  ngOnInit() {
    this.bad.getAccountDetails().subscribe(res => {
      this.accountDetails = res;
      this.toTalPages = this.accountDetails.length / 10;
      this.displayPage = this.accountDetails.slice(0, 10);
      this.items = this.accountDetails.map((x) => ({name: x['Transaction Details'],
      Account_No: x['Account No'],
      Date: x.Date,
      Transaction_Details: x['Transaction Details'],
      Value_Date: x['Value Date'],
      Withdrawal_AMT: x['Withdrawal AMT'],
      Deposit_AMT: x['Deposit AMT'],
      Balance_AMT: x['Balance AMT']
    }));
    });

  }

  

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}
