import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class StocksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
