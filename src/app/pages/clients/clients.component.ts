import { Component, OnInit, Input } from '@angular/core';
import { SEO } from 'src/app/services/seo.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients = [
    {
      title: 'Lloyds Commercial',
      image: 'http://thedigitalagency.london/media/1030/logo-1.jpg',
      button: {
        text: 'Website',
        link: 'https://commercialbanking.lloydsbank.com/home/',
      },
    },
    {
      title: 'HSBC',
      image: 'http://thedigitalagency.london/media/1029/logo-2.jpg',
      button: {
        text: 'Website',
        link: 'https://www.hsbc.co.uk/',
      },
    },

    {
      title: 'Sainsbury Bank',
      image: 'http://thedigitalagency.london/media/1028/logo-3.jpg',
      button: {
        text: 'Website',
        link: 'https://www.sainsburysbank.co.uk/',
      },
    },

    {
      title: 'Hotel4U',
      image: 'http://thedigitalagency.london/media/1027/logo-4.jpg',
      button: {
        text: 'Website',
        link: 'http://www.hotels4u.com/',
      },
    },

    {
      title: 'ASOS',
      image: 'http://thedigitalagency.london/media/1026/logo-5.jpg',
      button: {
        text: 'Website',
        link: 'http://www.asos.com/',
      },
    },

    {
      title: 'Thomas Cook',
      image: 'http://thedigitalagency.london/media/1025/logo-6.jpg',
      button: {
        text: 'Website',
        link: 'https://www.thomascook.com/',
      },
    },

    {
      title: 'Cadbury',
      image: 'http://thedigitalagency.london/media/1024/logo-7.jpg',
      button: {
        text: 'Website',
        link: 'https://www.cadbury.co.uk/',
      },
    },

    {
      title: 'Zuto',
      image: 'http://thedigitalagency.london/media/1023/logo-8.jpg',
      button: {
        text: 'Website',
        link: 'https://www.zuto.com/',
      },
    },

    {
      title: 'Dominos',
      image: 'http://thedigitalagency.london/media/1022/logo-9.jpg',
      button: {
        text: 'Website',
        link: 'https://www.dominos.co.uk/',
      },
    },

    {
      title: 'Hoseasons',
      image: 'http://thedigitalagency.london/media/1021/logo-10.jpg',
      button: {
        text: 'Website',
        link: 'http://www.hoseasons.co.uk/',
      },
    },

    {
      title: 'Booking.com',
      image: 'http://thedigitalagency.london/media/1020/logo-11.jpg',
      button: {
        text: 'Website',
        link: 'http://www.booking.com/',
      },
    },

    {
      title: 'Man Utd',
      image: 'http://thedigitalagency.london/media/1019/logo-12.jpg',
      button: {
        text: 'Website',
        link: 'http://www.manutd.com/',
      },
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
