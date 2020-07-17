import { Component, OnInit } from '@angular/core';
import { SEO } from 'src/app/services/seo.service';

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

  constructor(private seo: SEO) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Contact Page',
      description:
        'Contact me through this awesome search engine optimized Angular component',
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'contact-page',
    });
  }
}
