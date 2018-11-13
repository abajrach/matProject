import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFactsComponent } from './company/company-facts.component';
import { StocksComponent } from './stocks.component';

const routes: Routes = [
  {path: '', component: StocksComponent,
    children: [
      {path: 'company', component: CompanyFactsComponent },
      {path: '', component: CompanyFactsComponent },
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [StocksComponent, CompanyFactsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StocksModule { }
