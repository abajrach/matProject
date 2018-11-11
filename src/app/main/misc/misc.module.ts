import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatFactsComponent } from './cat-facts/cat-facts.component';
import { MiscComponent } from './misc.component';

const routes: Routes = [
  {path: '', component: MiscComponent,
    children: [
      {path: 'cat-facts', component: CatFactsComponent },
      {path: '', component: CatFactsComponent },
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    MiscComponent,
    CatFactsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MiscModule { }
