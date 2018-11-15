import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map as _map} from 'lodash';
import { map } from 'rxjs/operators';
import { Company } from '../models/stocks/company.model';
import { DelayedQuotes } from '../models/stocks/delayed-quotes.model';
import { FinancialDetails } from '../models/stocks/financial-details.model';
import { Quote } from '../models/stocks/quote.model';

// export const LIST_COMPANY_DETAILS: TemplateExecutor = template('https://api.iextrading.com/1.0/stock/${stockSymbol}/company');
// export const LIST_COMPANY_DETAILS = 'https://api.iextrading.com/1.0/stock/${stockSymbol}/company';

const API_URL = 'https://api.iextrading.com/1.0';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private httpClient: HttpClient) { }

  public getCompanyDetails(stockSymbol: string): Observable<Company> {
    const companyDetailsUrl = API_URL + `/stock/${stockSymbol}/company`;

    return this.httpClient
      .get<Company>(companyDetailsUrl);
  }

  public getDelayedQuotes(stockSymbol: string): Observable<DelayedQuotes> {
    const delayedQuotesUrl = API_URL + `/stock/${stockSymbol}/delayed-quote`;

    return this.httpClient
      .get<DelayedQuotes>(delayedQuotesUrl);
  }

  public getQuote(stockSymbol: string): Observable<Quote> {
    const delayedQuotesUrl = API_URL + `/stock/${stockSymbol}/quote`;

    return this.httpClient
      .get<Quote>(delayedQuotesUrl);
  }

  public getFinancialDetails(stockSymbol: string): Observable<FinancialDetails[]> {
    const financialDetailsUrl = API_URL + `/stock/${stockSymbol}/financials`;
    return this.httpClient
      .get<FinancialDetails[]>(financialDetailsUrl)
      .pipe(
        map((body: any) => <FinancialDetails[]> _map(body.financials, FinancialDetails.fromJSON))
      );
  }
}
