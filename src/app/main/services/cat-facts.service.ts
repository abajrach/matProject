import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFact } from '../models/cat-facts/cat-facts.model';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  public catFacts: CatFact[];

  constructor(private httpClient: HttpClient) { }

  loadAllFacts(): Observable<CatFact[]> {
    const factsUrl = 'https://cat-fact.herokuapp.com/facts';

    return this.httpClient
      .get<CatFact[]>(factsUrl);
      // .pipe(map((body: any) => CatFact.fromJSON(body.all)));
      // .map((body) => <CatFact[]> _map(body.all, CatFact.fromJSON));

        // <CatFact[]> map((body) => CatFact.fromJSON(body))
  }
}
