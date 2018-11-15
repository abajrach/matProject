import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Company } from 'src/app/main/models/stocks/company.model';
import { StocksService } from 'src/app/main/services/stocks.service';
import { Quote } from '../../../../models/stocks/quote.model';
import { ChatService } from 'src/app/main/services/chat.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnChanges {

  @Input() public stockSymbol: string = '';
  public company: Company;
  public quote: Quote;


  constructor(
    private stocksService: StocksService,
    private chat: ChatService) { }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
    })
  }

  sendMessage() {
    this.chat.sendMsg("Test message");
  }
  
  ngOnChanges() {
    if (this.stockSymbol) {
      forkJoin(
        this.stocksService.getCompanyDetails(this.stockSymbol),
        this.stocksService.getQuote(this.stockSymbol)
      )
        .subscribe(([detailsResponse, quoteResponse]) => {
          this.company = detailsResponse;
          this.quote = quoteResponse;

          console.log('%c this.company:', 'color: #bada55', this.company);
          console.log('%c this.financialDetails:', 'color: #bada55', this.quote);
        });
    }
  }

}
