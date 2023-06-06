import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  portfolio = Portfolio
  constructor() { }

  ngOnInit(): void {
  }

}
