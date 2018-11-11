import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  // { path: 'misc', loadChildren: './misc/misc.module#MiscModule' },
  // { path: 'about', component: AboutComponent, },
  { path: '', loadChildren: './main/main.module#MainModule' },
  { path: '**', redirectTo:'dashboard' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
