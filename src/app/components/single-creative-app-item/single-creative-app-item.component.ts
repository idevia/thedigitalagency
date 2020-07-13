import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-creative-app-item',
  templateUrl: './single-creative-app-item.component.html',
  styleUrls: ['./single-creative-app-item.component.scss']
})
export class SingleCreativeAppItemComponent implements OnInit {

  @Input() app: any;
  @Input() index: any;

  constructor() { }

  ngOnInit(): void {
  }

}
