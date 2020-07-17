import { Component, OnInit } from '@angular/core';
import { SEO } from 'src/app/services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
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
