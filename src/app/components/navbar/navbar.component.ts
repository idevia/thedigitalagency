import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  socialLinks = [];
  pageTitle = '';
  showNavbar: boolean = false;

  constructor(private data: DataService, private router: Router) {
    this.socialLinks = this.data.getSocialData();
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      switch (evt.url) {
        case '/':
          this.pageTitle = 'Home';
          break;
        case '/who-we-are':
          this.pageTitle = 'Who we are';
          break;
        case '/our-clients':
          this.pageTitle = 'Our clients';
          break;
        case '/contact-us':
          this.pageTitle = 'Contact us';
          break;
      }
    });
  }

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }
  navigateTo(link): void {
    this.showNavbar = false;
    this.router.navigateByUrl(link);
  }
}
