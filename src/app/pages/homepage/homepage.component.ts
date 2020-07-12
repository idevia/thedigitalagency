import { Component, OnInit } from '@angular/core';

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
        link: '#!',
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
        link: '#!',
      },
    },
    {
      title: 'Digital Marketing',
      tag: 'Hope is not strategy, Marketing is.',
      description:
        'Digital marketing has become an essential aspect in running a modern business. At The Digital Agency, we analyse market intelligence to provide our clients with the most suitable and cost effective Creative Digital Marketing Solutions to ensure that their business sees the growth it.',
      image: 'http://thedigitalagency.london/media/1016/img-2.png',
      button: {
        text: 'How we do?',
        link: '#!',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
