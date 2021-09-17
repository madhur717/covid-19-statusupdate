import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }

  // news api topheading
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=d9a9682e77e841aa84f76da905283596";


  // topheading
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

 
}
