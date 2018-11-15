import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../../shared/material.module';
import { CompanyFactsComponent } from './company/company-facts.component';
import { StocksComponent } from './stocks.component';
import { OverviewComponent } from './company/overview/overview.component';
import { ChartsComponent } from './company/charts/charts.component';
import { ChatService } from '../../services/chat.service';
import { WebsocketService } from '../../services/websocket.service';

const routes: Routes = [
  {path: '', component: StocksComponent,
    children: [
      {path: 'company', component: CompanyFactsComponent },
      // {path: 'company/overview', component: OverviewComponent },
      // {path: 'company/charts', component: ChartsComponent },
      {path: '', component: CompanyFactsComponent },
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [StocksComponent, CompanyFactsComponent, OverviewComponent, ChartsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ChatService,
    WebsocketService
  ]
})
export class StocksModule { }
