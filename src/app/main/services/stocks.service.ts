import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFact } from '../models/cat-facts/cat-facts.model';
import { Company } from '../models/stocks/company.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private httpClient: HttpClient) { }

  public getCompanyDetails(): Observable<Company> {
    const companyDetailsUrl = 'https://api.iextrading.com/1.0/stock/aapl/company';

    return this.httpClient
      .get<Company>(companyDetailsUrl);
  }
/*  loadAllFacts(): Observable<CatFact[]> {
    const factsUrl = 'https://cat-fact.herokuapp.com/facts';

    return this.httpClient
      .get<CatFact[]>(factsUrl);
    // .pipe(map((body: any) => CatFact.fromJSON(body.all)));
    // .map((body) => <CatFact[]> _map(body.all, CatFact.fromJSON));

    // <CatFact[]> map((body) => CatFact.fromJSON(body))
  }*/
}
