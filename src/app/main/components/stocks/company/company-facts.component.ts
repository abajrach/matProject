import { Component, OnInit } from '@angular/core';
import { Company } from '../../../models/stocks/company.model';
import { StocksService } from '../../../services/stocks.service';

@Component({
  selector: 'app-company',
  templateUrl: './company-facts.component.html',
  styleUrls: ['./company-facts.component.scss']
})
export class CompanyFactsComponent implements OnInit {

  public company: Company;

  constructor(private stocksService: StocksService) { }

  ngOnInit() {
  }

  public onSearch(stockSymbol: string) {
    console.log('%c stockSymbol:', 'color: #bada55', stockSymbol);
    this.stocksService.getCompanyDetails(stockSymbol)
      .subscribe(data => {
        this.company = data;
        console.log('%c data:', 'color: #bada55', this.company);
      });
  }

}
