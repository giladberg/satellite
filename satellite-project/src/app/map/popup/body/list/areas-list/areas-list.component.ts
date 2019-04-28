import {Component, Input, OnInit} from '@angular/core';
import {Areas} from "../../../../../entities/models/areas.model";


@Component({
  selector: 'app-areas-list',
  templateUrl: './areas-list.component.html',
  styleUrls: ['./areas-list.component.scss']
})
export class AreasListComponent implements OnInit {
  @Input() data:any;
  areas: Areas[];

  constructor() { }
  ngOnInit() {
    this.areas = this.data;
  }

}
