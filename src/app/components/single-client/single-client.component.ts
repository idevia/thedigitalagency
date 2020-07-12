import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-client',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.scss']
})
export class SingleClientComponent implements OnInit {

  @Input() client: any;

  constructor() { }

  ngOnInit(): void {
  }

}
