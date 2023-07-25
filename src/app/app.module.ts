import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BoardOfDirectorsComponent } from './components/board-of-directors/board-of-directors.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CorporateGovernanceComponent } from './components/corporate-governance/corporate-governance.component';
import { ExitedPortfolioComponent } from './components/exited-portfolio/exited-portfolio.component';
import { FinancialsComponent } from './components/financials/financials.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ShareHoldersComponent } from './components/share-holders/share-holders.component';
import { StartegiesDetailsComponent } from './components/startegies-details/startegies-details.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormEditComponent } from './components/form-edit/form-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    AboutUsComponent,
    BoardOfDirectorsComponent,
    ContactUsComponent,
    CorporateGovernanceComponent,
    ExitedPortfolioComponent,
    FinancialsComponent,
    PortfolioComponent,
    ShareHoldersComponent,
    StartegiesDetailsComponent,
    CookiePolicyComponent,
    PrivacyPolicyComponent,
    DisclaimerComponent,
    NotFoundComponent,
    FormEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatExpansionModule,
    NgbModule,
    MatTableModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
