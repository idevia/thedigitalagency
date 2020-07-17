import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SEO {
  constructor(private meta: Meta) {}

  generateTags(config) {
    // default values
    config = {
      title: 'Digital Agency London | Result Driven Creative Agency',
      description:
        'Creative agency based in London providing clients with niche digital marketing and development services in web and mobile arena',
      image: 'http://thedigitalagency.london/media/1041/innerbanner1.png',
      slug: '',
      ...config,
    };

    // this.meta.updateTag({ name: 'twitter:card', content: 'summary' })
    // this.meta.updateTag({ name: 'twitter:site', content: '@angularfirebase' })
    // this.meta.updateTag({ name: 'twitter:title', content: config.title })
    // this.meta.updateTag({ name: 'twitter:description', content: config.description })
    // this.meta.updateTag({ name: 'twitter:image', content: config.image })

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Digital Agency',
    });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({
      property: 'og:description',
      content: config.description,
    });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({
      property: 'og:url',
      content: `http://thedigitalagency.london/${config.slug}`,
    });
  }
}
