import { Component, OnInit } from '@angular/core';
import {Areas} from "../../../entities/models/areas.model";
import {areasService} from "../../../services/areas.service";

@Component({
  selector: 'app-turquoise-popup',
  templateUrl: './turquoise-popup.component.html',
  styleUrls: ['./turquoise-popup.component.scss']
})
export class TurquoisePopupComponent implements OnInit {
  areas: Areas[];


  constructor(private areaService: areasService) { }

  ngOnInit() {
    this.areas = this.areaService.getAreas();

  }

}
