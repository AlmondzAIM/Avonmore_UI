import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Portfolio } from 'src/portfolio';
import { strategies } from 'src/strategies';
import { StartegiesDetailsComponent } from '../startegies-details/startegies-details.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( private dilog: MatDialog ) { }
  startegies  = strategies
  portfolio = Portfolio.currentPortfolio.slice(0,3)
  exitedPortfolio = Portfolio.exitedPortfolio
  ngOnInit(): void {
  }

  slides = [
    {
      name:'Avonmore Capital & Management Services Limited',
      about:'Having “Nation First” motto, lets help create businesses in the National Interest',
      img:'assets/images/slide1.jpg'
    },
    {
      name:'Avonmore Capital & Management Services Limited',
      about:'Helping businesses to grow to it\'s full potential',
      img:'assets/images/slide2.jpg'
    },
  ]
  
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  openDilog(i){

    this.dilog.open(StartegiesDetailsComponent, {data:i,height:'90%',})
  }

}
