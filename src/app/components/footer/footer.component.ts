import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.router.config.forEach(x => {
      this.routes.push(`/${x.path}`)
    } )
    console.log(this.router.url)
    this.router.events.subscribe(x=> {
      this.routes.includes(`${this.router.url}`)?this.showFooter = true : this.showFooter = false
    })
  }

  routes = []
  showFooter = true

}
