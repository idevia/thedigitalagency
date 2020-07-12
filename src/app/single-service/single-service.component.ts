import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.scss'],
})
export class SingleServiceComponent implements OnInit {
  @Input() service: any;

  constructor() {
    console.log(this.service);
  }

  ngOnInit(): void {}
}
