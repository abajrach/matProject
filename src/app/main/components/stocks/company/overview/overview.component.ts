import { Component, OnInit, Input } from '@angular/core';
import { StocksService } from 'src/app/main/services/stocks.service';
import { Company } from 'src/app/main/models/stocks/company.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() public stockSymbol: string = '';
  public company: Company;
  
  constructor(private stocksService: StocksService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.stockSymbol) {
      console.log(this.stockSymbol);
      this.stocksService.getCompanyDetails(this.stockSymbol)
      .subscribe(data => {
        this.company = data;
      });
    }
  }

}
