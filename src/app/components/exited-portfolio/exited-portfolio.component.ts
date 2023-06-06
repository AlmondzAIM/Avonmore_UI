import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/portfolio';

@Component({
  selector: 'app-exited-portfolio',
  templateUrl: './exited-portfolio.component.html',
  styleUrls: ['./exited-portfolio.component.css']
})
export class ExitedPortfolioComponent implements OnInit {

  constructor() { }
  portfolio = Portfolio
  ngOnInit(): void {
  }

}
