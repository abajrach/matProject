import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MaterialModule } from '../shared/material.module';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'misc', loadChildren: './components/misc/misc.module#MiscModule' },
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
