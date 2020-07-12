import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
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
      image: 'http://thedigitalagency.london/media/1028/logo-3.png',
      button: {
        text: 'Website',
        link: 'https://www.sainsburysbank.co.uk/',
      },
    },


    {
      title: 'Hotel4U',
      image: 'http://thedigitalagency.london/media/1027/logo-4.png',
      button: {
        text: 'Website',
        link: 'http://www.hotels4u.com/',
      },
    },


    {
      title: 'ASOS',
      image: 'http://thedigitalagency.london/media/1016/img-2.png',
      button: {
        text: 'Website',
        link: '#!',
      },
    },


    {
      title: 'Thomas Cook',
      image: 'http://thedigitalagency.london/media/1016/img-2.png',
      button: {
        text: 'Website',
        link: '#!',
      },
    },


    {
      title: 'Cadbury',
      image: 'http://thedigitalagency.london/media/1016/img-2.png',
      button: {
        text: 'Website',
        link: '#!',
      },
    },


    {
      title: 'Zuto',
      image: 'http://thedigitalagency.london/media/1016/img-2.png',
      button: {
        text: 'Website',
        link: '#!',
      },
    },

    {
      title: 'Dominos',
      image: 'http://thedigitalagency.london/media/1016/img-2.png',
      button: {
        text: 'Website',
        link: '#!',
      },
    },


    {
      title: 'Hoseasons',
      image: 'http://thedigitalagency.london/media/1016/img-2.png',
      button: {
        text: 'Website',
        link: '#!',
      },
    },


    {
      title: 'Booking.com',
      image: 'http://thedigitalagency.london/media/1016/img-2.png',
      button: {
        text: 'Website',
        link: '#!',
      },
    },


    {
      title: 'Man Utd',
      image: 'http://thedigitalagency.london/media/1016/img-2.png',
      button: {
        text: 'Website',
        link: '#!',
      },
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
