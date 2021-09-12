import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/newsapi.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private service: NewsapiService) { }

  totalLength:any;
  page:number = 1;

  // display topheading
  topheadingDisplay: any = [];

  ngOnInit(): void {

    this.service.topHeading().subscribe((result) => {

      this.totalLength = result.length;
      
      console.log(result);
      this.topheadingDisplay = result.articles;
    })
  }
}
