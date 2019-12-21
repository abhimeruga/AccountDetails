import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankaccountdetailsService {

  constructor(private http: HttpClient) { }

  public getAccountDetails(): Observable<any> {

    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    return this.http.get(proxyurl +"http://starlord.hackerearth.com/bankAccount",
    {
     headers:new HttpHeaders().set('Access-Control-Allow-Headers', 'Content-Type')
     .set('Access-Control-Allow-Origin', '*')

    });
  }

}
