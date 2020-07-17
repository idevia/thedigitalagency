import { Inject, Injectable } from '@angular/core';

@Injectable()
export class DataService {
  data = {
    social: [
      {
        icon: 'si si-instagram',
        link: '#!',
      },
      {
        icon: 'si si-facebook',
        link: 'https://www.facebook.com/thedigitalagencylondon/',
      },
      {
        icon: 'si si-youtube',
        link: 'https://www.youtube.com/channel/UCrYXTOE0ZEbt6xwkHi0dUjQ',
      },
      {
        icon: 'si si-twitter',
        link: 'https://twitter.com/_Digital_Agency',
      },
    ],
  };

  getSocialData() {
    return this.data.social;
  }
}
