import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component'
import { GoogleChartsModule } from 'angular-google-charts';
import { GithubdemoComponent } from './components/githubdemo/githubdemo.component';

import { NewsComponent } from './components/news/news.component';
import { NewsapiService } from 'src/app/newsapi.service';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    DashboardCardComponent,
    GithubdemoComponent,
    NewsComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    LoadingBarHttpClientModule,
    NgxPaginationModule,
    
    
    

  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
