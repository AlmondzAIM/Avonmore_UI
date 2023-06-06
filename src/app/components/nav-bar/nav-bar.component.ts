import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
    this.router.config.forEach(x => {
      this.routes.push(`/${x.path}`)
    } )
    console.log(this.router.url)
    this.router.events.subscribe(x=> {
      this.routes.includes(`${this.router.url}`)?this.showHeader = true : this.showHeader = false
    })
  }
  showHeader = true
  routes = []
  scrollEvent = (event: any): void => {
    const n = event.srcElement.scrollingElement.scrollTop;
    if(n>80){
      // console.log('more',n)
      document.getElementById('main').style.backgroundColor = this.router.url=='//'? '#0e274f':'white'
      document.getElementById('main').style.boxShadow = '2px 2px 4px rgba(133, 133, 133, 0.401)'
      document.getElementById('main').style.padding = '.5% 5%'
      
    }
    if(n<80){
      document.getElementById('main').style.backgroundColor = 'rgba(255, 255, 255, 0)'
      document.getElementById('main').style.boxShadow = '2px 2px 4px rgba(133, 133, 133, 0)'
      document.getElementById('main').style.padding = '.8% 5%'
      // console.log( 'less', n)
    }

  }
  menu = false
  showMenu(){
    this.menu = !this.menu
  }
  

}
