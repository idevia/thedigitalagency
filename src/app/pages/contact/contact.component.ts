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
      title: 'Contact us | Digital Agency London | Creative Agency',
      description:
        'Get in touch to discuss your projects, we can help you achieve your ambitious goals into reality',
      image: 'http://thedigitalagency.london/media/1041/innerbanner1.png',
    });
  }
}
