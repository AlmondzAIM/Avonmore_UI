import { sha1 } from '@angular/compiler/src/i18n/digest';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BoardOfDirectorsComponent } from './components/board-of-directors/board-of-directors.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { CorporateGovernanceComponent } from './components/corporate-governance/corporate-governance.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { ExitedPortfolioComponent } from './components/exited-portfolio/exited-portfolio.component';
import { FinancialsComponent } from './components/financials/financials.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ShareHoldersComponent } from './components/share-holders/share-holders.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'corporate-governance',
    component:CorporateGovernanceComponent,
  },
  {
    path:'board-of-directors',
    component:BoardOfDirectorsComponent
  },
  {
    path:'exited-portfolio',
    component:ExitedPortfolioComponent
  },
  {
    path:'current-portfolio',
    component:PortfolioComponent
  },
  {
    path:'share-holders',
    component:ShareHoldersComponent
  },
  {
    path:'financials',
    component:FinancialsComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'cookie-policy',
    component:CookiePolicyComponent
  },
  {
    path:'privacy-policy',
    component:PrivacyPolicyComponent
  },
  {
    path:'disclaimer',
    component:DisclaimerComponent
  },
  {
    path:'**',
    component:NotFoundComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
