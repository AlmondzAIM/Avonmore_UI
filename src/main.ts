import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// AOS.init();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
setTimeout(() => {
  document.getElementById('process').style.display = 'none'
},2000);