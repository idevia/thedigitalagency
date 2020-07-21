import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { AboutComponent } from './pages/about/about.component';
import { DigitalMarketingComponent } from './pages/digital-marketing/digital-marketing.component';
import { CreativeAppsComponent } from './pages/creative-apps/creative-apps.component';
import { WebsiteDesignComponent } from './pages/website-design/website-design.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'our-clients', component: ClientsComponent },
  { path: 'who-we-are', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'digital-marketing', component: DigitalMarketingComponent },
  { path: 'creative-apps', component: CreativeAppsComponent },
  { path: 'website-design-process', component: WebsiteDesignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
