import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { AboutComponent } from './pages/about/about.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SingleServiceComponent } from './single-service/single-service.component';
import { SingleClientComponent } from './components/single-client/single-client.component';
import { DigitalMarketingComponent } from './pages/digital-marketing/digital-marketing.component';
import { SingleDigitalMarketItemComponent } from './components/single-digital-market-item/single-digital-market-item.component';
import { CreativeAppsComponent } from './pages/creative-apps/creative-apps.component';
import { SingleCreativeAppItemComponent } from './components/single-creative-app-item/single-creative-app-item.component';
import { WebsiteDesignComponent } from './pages/website-design/website-design.component';
import { DataService } from './services/data.service';
import { SEO } from './services/seo.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    ClientsComponent,
    AboutComponent,
    HomepageComponent,
    SingleServiceComponent,
    SingleClientComponent,
    DigitalMarketingComponent,
    SingleDigitalMarketItemComponent,
    CreativeAppsComponent,
    SingleCreativeAppItemComponent,
    WebsiteDesignComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [DataService, SEO],
  bootstrap: [AppComponent],
})
export class AppModule {}
