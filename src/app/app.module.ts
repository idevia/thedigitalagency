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
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
