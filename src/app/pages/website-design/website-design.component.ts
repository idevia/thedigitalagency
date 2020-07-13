import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-design',
  templateUrl: './website-design.component.html',
  styleUrls: ['./website-design.component.scss']
})
export class WebsiteDesignComponent implements OnInit {
  processes = [
    {
      image: 'http://thedigitalagency.london/media/1040/img-1.jpg',
      title: 'Concept planning and collabration',
      description:
        'We ask you to come to our agency and collaborate in requirements gathering and planning the ideas.',
    },
    {
      image: 'http://thedigitalagency.london/media/1039/img-2.jpg',
      title: 'Prototyping',
      description:
        'We will sketch the ideas drawn from initial brain storming to an prototype app for initial feedback and approval.',
    },
    {
      image: 'http://thedigitalagency.london/media/1038/img-3.jpg',
      title: 'Test, Design and Develop',
      description:
        'Based on feedback the required amendments will be done and actual process of creating app will begin.',
    },
    {
      image: 'http://thedigitalagency.london/media/1037/img-4.jpg',
      title: 'Sprint deployment and updates',
      description:
        'We use agile process for our development, so at the end of every sprint there will be a UAT update for end client to review and track the progress along with our progress reports.',
    },
    {
      image: 'http://thedigitalagency.london/media/1036/img-5.jpg',
      title: 'Big day - Release App onto markets',
      description:
        'On final approval and sign off, the app will be pushed to production environment and ready for market launch.',
    },
    {
      image: 'http://thedigitalagency.london/media/1035/img-6.jpg',
      title: 'Marketing and Advertising',
      description:
        'Our marketing and advertising teams will trigger the campaigns and get connected with target audience.',
    },
    {
      image: 'http://thedigitalagency.london/media/1034/img-7.jpg',
      title: 'Revenue generation and optimisation',
      description:
        'Help our customer with niche tracking tools and techniques to get the maximum ROI.',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
