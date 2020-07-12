import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  socialLinks = [
    {
      image: 'http://thedigitalagency.london/media/1008/icon-facebook.png',
      link: '#!',
    },
    {
      image: 'http://thedigitalagency.london/media/1007/icon-twitter.png',
      link: '#!',
    },
    {
      image: 'http://thedigitalagency.london/media/1006/icon-youtube.png',
      link: '#!',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
