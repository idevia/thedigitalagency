import { Component, OnInit } from '@angular/core';
import { SEO } from 'src/app/services/seo.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  socialLinks = [];

  constructor(private seo: SEO, private dataService: DataService) {
    this.socialLinks = this.dataService.getSocialData();
  }

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
