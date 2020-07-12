import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  socialLinks = [
    {
      image: 'http://thedigitalagency.london/media/1001/facebook.png',
      link: '#!',
    },
    {
      image: 'http://thedigitalagency.london/media/1002/twitter.png',
      link: '#!',
    },
    {
      image: 'http://thedigitalagency.london/media/1003/youtube.png',
      link: '#!',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
