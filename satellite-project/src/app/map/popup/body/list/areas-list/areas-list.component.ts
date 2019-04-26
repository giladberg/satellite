import { Component, OnInit } from '@angular/core';
import {Areas} from "../../../../../entities/models/areas.model";
import {areasService} from "../../../../../services/areas.service";

@Component({
  selector: 'app-areas-list',
  templateUrl: './areas-list.component.html',
  styleUrls: ['./areas-list.component.scss']
})
export class AreasListComponent implements OnInit {
  areas: Areas[];

  constructor(private areaService: areasService) { }
  ngOnInit() {
    this.areas = this.areaService.getAreas();
  }

}
