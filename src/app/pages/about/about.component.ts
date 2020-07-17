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
      title: 'Who we are | Digital Agency London | Creative Agency',
      description:
        'The Digital Agency has grown to become one of the London leading agency, specialising in digital marketing, web and mobile development',
      image: 'http://thedigitalagency.london/media/1041/innerbanner1.png',
    });
  }
}
