import { Component, OnInit } from '@angular/core';
import { Company } from '../../../models/stocks/company.model';
import { DelayedQuotes } from '../../../models/stocks/delayed-quotes.model';
import { FinancialDetails } from '../../../models/stocks/financial-details.model';
import { StocksService } from '../../../services/stocks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company-facts.component.html',
  styleUrls: ['./company-facts.component.scss']
})
export class CompanyFactsComponent implements OnInit {

  public delayedQuotes: DelayedQuotes;
  public financialDetails: FinancialDetails[] = [];

  public stockSymbolString: string;
  // public routeLinks: any[];
  // public activeLinkIndex = -1;

  constructor(private stocksService: StocksService) {
    // this.routeLinks = [
    //   {
    //       label: 'Overview',
    //       link: './overview',
    //       index: 0
    //   }, {
    //       label: 'Charts',
    //       link: './charts',
    //       index: 1
    //   }
    // ];
  }

  ngOnInit() {
    // this.router.events.subscribe((res) => {
    //   this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    // });
  }

  public onSearch(stockSymbol: string) {

    if(stockSymbol) {
      this.stockSymbolString = stockSymbol;
  
      // this.stocksService.getDelayedQuotes(stockSymbol)
      //   .subscribe(data => {
      //     this.delayedQuotes = data;
      //   });
  
      // this.stocksService.getFinancialDetails(stockSymbol)
      //   .subscribe(data => {
      //     console.log('%c data:', 'color: #bada55', data);
      //     this.financialDetails = data;
      //   });
    }
  }

}
