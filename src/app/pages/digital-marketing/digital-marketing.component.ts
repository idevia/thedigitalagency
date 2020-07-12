import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.scss']
})
export class DigitalMarketingComponent implements OnInit {

  marketings = [
    {
      title: "There's an right and wrong way for everything",
      image: 'http://thedigitalagency.london/media/1052/img001.png',
      button: {
        text: 'How we do it?',
        link: '#!',
      },
    },

    {
      title: "Social identity is heart of businesses today",
      image: 'http://thedigitalagency.london/media/1046/img002.png',
      button: {
        text: 'Get in Touch',
        link: '#!',
      },
    },

    {
      title: "Digital appearance can change everything",
      image: 'http://thedigitalagency.london/media/1047/img003.png',
      button: {
        text: 'How we do it?',
        link: '#!',
      },
    },

    {
      title: "Content is the king",
      image: 'http://thedigitalagency.london/media/1048/img004.png',
      button: {
        text: 'Know details',
        link: '#!',
      },
    },

    {
      title: "Traditional techniques but still effective",
      image: 'http://thedigitalagency.london/media/1050/img005.png',
      button: {
        text: 'Get results',
        link: '#!',
      },
    },

    {
      title: "Getting you the best of ROI",
      image: 'http://thedigitalagency.london/media/1051/img006.png',
      button: {
        text: 'Ask us how we do?',
        link: '#!',
      },
    },

    {
      title: "Still growing but can be game changer",
      image: 'http://thedigitalagency.london/media/1049/img007.png',
      button: {
        text: 'Try our techniques',
        link: '#!',
      },
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
