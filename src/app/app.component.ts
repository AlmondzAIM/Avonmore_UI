import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  processing = true
  constructor(
    private router:Router
  ){
    setTimeout(() => {
      this.processing = false
    },2000);

    this.router.config.forEach(x => {
      this.routes.push(`/${x.path}`)
    } )
    console.log(this.router.url)
    this.router.events.subscribe(x=> {
      this.routes.includes(`${this.router.url}`)?this.show = true : this.show = false
    })
  }

  routes = []
  show = true

  



  showContactForm = false;
  toggleContactForm(){
    this.showContactForm = !this.showContactForm;
  }

  title = 'avenmore';
}
