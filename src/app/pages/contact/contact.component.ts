import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
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
