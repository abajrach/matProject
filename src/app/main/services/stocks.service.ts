import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/stocks/company.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private httpClient: HttpClient) { }

  public getCompanyDetails(stockSymbol: string): Observable<Company> {
    const companyDetailsUrl = `https://api.iextrading.com/1.0/stock/${stockSymbol}/company`;

    return this.httpClient
      .get<Company>(companyDetailsUrl);
  }
}
