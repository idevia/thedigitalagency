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
        link: '#!',
      },
      {
        icon: 'si si-youtube',
        link: '#!',
      },
      {
        icon: 'si si-twitter',
        link: '#!',
      },
    ],
  };

  getSocialData() {
    return this.data.social;
  }
}
