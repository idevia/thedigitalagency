import { Component, OnInit } from '@angular/core';
import { SEO } from '../../services/seo.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  services = [
    {
      title: 'Creative apps',
      tag: 'Results, Delivered',
      description:
        'Since 2008, The Digital Agency has been making users’ lives easier by offering a wide range of services through its extensive platform. We believe that there’s a fast solution to everything — and with Industry App experts committed to simplifying the user experience, The Digital Agency guarantees life changing results that last. What started off as an App to tackle one specific industry, has turned into an automated and intricate development that managed to make a breakthrough in the industry. Start your journey with us and simplify your life today!',
      image: 'http://thedigitalagency.london/media/1017/img-1.png',
      button: {
        text: 'How we do?',
        link: '/creative-apps',
      },
    },
    {
      title: 'Website design',
      tag: 'We’ll Take Care of That',
      description:
        'Looking for Website Design and Development services? Leave it to us. We know just what it takes to differentiate you from the crowded and competitive market in your specific industry. With our team of experts, no task is too large for us to accomplish. We are driven, dedicated, and will work tirelessly to get the results that you deserve.',
      image: 'http://thedigitalagency.london/media/1016/img-2.png',
      button: {
        text: 'How we do?',
        link: '/website-design-process',
      },
    },
    {
      title: 'Digital Marketing',
      tag: 'Hope is not strategy, Marketing is.',
      description:
        'Digital marketing has become an essential aspect in running a modern business. At The Digital Agency, we analyse market intelligence to provide our clients with the most suitable and cost effective Creative Digital Marketing Solutions to ensure that their business sees the growth it.',
      image: 'http://thedigitalagency.london/media/1015/img-3.png',
      button: {
        text: 'How we do?',
        link: '/digital-marketing',
      },
    },

    {
      title: 'Business transformation and Consultation',
      tag: 'Results You’ll Love',
      description:
        'We specialize in helping business expand and grow using help of technology. Our consultant can help you analyse the potential of opportunities with innovation and creative ideas. Just ask us for free consultation and we guarantee you the process to success.',
      image: 'http://thedigitalagency.london/media/1014/img-4.png',
      button: {
        text: 'Get in Touch',
        link: '/contact-us',
      },
    },

    {
      title: 'Online Marketing',
      tag: 'Get Things Done',
      description:
        'Our Online Marketing services are best-in-class. The Online Marketing work we offer enables your business to grow and helps increase your exposure in your business vertical. We begin by working with you to define project goals that focus on reach, engagement, and conversion. We then map out a plan to achieve these goals. This is what we live for: merging creativity and technology in a way that brings your business more success than you ever thought was possible.',
      image: 'http://thedigitalagency.london/media/1013/img-5.png',
      button: {
        text: 'Get in Touch',
        link: '/contact-us',
      },
    },

    {
      title: 'Sitecore CMS experts',
      tag: 'Utilise Sitecore at its best',
      description:
        'We have best developers in the market with years of experience developing websites using sitecore. They can be game changer when it comes to integrating website with third party, using market suite or optimising performance.',
      image: 'http://thedigitalagency.london/media/1012/img-6.png',
      button: {
        text: 'Get in Touch',
        link: '/contact-us',
      },
    },

    {
      title: 'Innovation',
      tag: 'Lets do something which no one thought about it',
      description:
        'Our creative team love brain storming new ideas and possibilities, can we do this? If you need something unique which could be challenging or impossible then discuss with us.',
      image: 'http://thedigitalagency.london/media/1011/img-7.png',
      button: {
        text: 'Get in Touch',
        link: '/contact-us',
      },
    },
  ];
  constructor(private seo: SEO) {}

  ngOnInit(): void {}
}
