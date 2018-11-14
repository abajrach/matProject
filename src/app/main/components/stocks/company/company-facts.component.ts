import { Component, OnInit } from '@angular/core';
import { Company } from '../../../models/stocks/company.model';
import { DelayedQuotes } from '../../../models/stocks/delayed-quotes.model';
import { FinancialDetails } from '../../../models/stocks/financial-details.model';
import { StocksService } from '../../../services/stocks.service';

@Component({
  selector: 'app-company',
  templateUrl: './company-facts.component.html',
  styleUrls: ['./company-facts.component.scss']
})
export class CompanyFactsComponent implements OnInit {

  public company: Company;
  public delayedQuotes: DelayedQuotes;
  public financialDetails: FinancialDetails[] = [];

  constructor(private stocksService: StocksService) { }

  ngOnInit() {
  }

  public onSearch(stockSymbol: string) {
    this.stocksService.getCompanyDetails(stockSymbol)
      .subscribe(data => {
        this.company = data;
      });

    this.stocksService.getDelayedQuotes(stockSymbol)
      .subscribe(data => {
        this.delayedQuotes = data;
      });

    this.stocksService.getFinancialDetails(stockSymbol)
      .subscribe(data => {
        // this.delayedQuotes = data;
        console.log('%c data:', 'color: #bada55', data);
        this.financialDetails = data;
      });
  }

}
