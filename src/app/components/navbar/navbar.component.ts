import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  socialLinks = [];

  showNavbar: boolean = false;

  constructor(private data: DataService) {
    this.socialLinks = this.data.getSocialData();
  }

  ngOnInit(): void {}

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }
}
