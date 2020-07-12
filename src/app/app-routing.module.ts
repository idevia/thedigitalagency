import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { AboutComponent } from './pages/about/about.component';
import { DigitalMarketingComponent } from './pages/digital-marketing/digital-marketing.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'our-clients', component: ClientsComponent },
  { path: 'who-are-we', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'digital-marketing', component: DigitalMarketingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
