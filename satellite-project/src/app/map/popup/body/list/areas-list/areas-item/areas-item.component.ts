import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-areas-item',
  templateUrl: './areas-item.component.html',
  styleUrls: ['./areas-item.component.scss']
})
export class AreasItemComponent implements OnInit {
  @Input('item') area: any;
  constructor() { }

  ngOnInit() {
  }

}
