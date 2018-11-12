import { Component, OnInit } from '@angular/core';
import { CatFactsService } from 'src/app/main/services/cat-facts.service';
import { CatFact } from 'src/app/main/models/cat-facts/cat-facts.model';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent implements OnInit {

  public catFacts: CatFact[];

  constructor(private catFactsService: CatFactsService) { }

  ngOnInit() {
    this.catFactsService.loadAllFacts()
      .subscribe(data => {
        this.catFacts = data;
        // console.log(this.catFacts | json);
      });
  }

}
