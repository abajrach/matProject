import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../shared/material.module';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'misc', loadChildren: './misc/misc.module#MiscModule' },
      { path: 'about', component: AboutComponent },
      { path: '',  redirectTo: 'dashboard' }
    ]},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class MainModule { }
