import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-digital-market-item',
  templateUrl: './single-digital-market-item.component.html',
  styleUrls: ['./single-digital-market-item.component.scss']
})
export class SingleDigitalMarketItemComponent implements OnInit {

@Input() marketing: any;

  constructor() { }

  ngOnInit(): void {
  }

}
