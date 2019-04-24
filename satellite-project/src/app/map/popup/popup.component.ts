import { Component, OnInit } from '@angular/core';
import {devicesService} from "../../services/devices.service";
import {areasService} from "../../services/areas.service";
import {placesService} from "../../services/places.service";
import {EntityEnums} from "../../entities/enums/entity.enum";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  devicesFlag: boolean;
  areasFlag: boolean;
  placesFlag: boolean;
  noFound:boolean = false;
  menuType: EntityEnums;
  constructor(private deviceService: devicesService,private areaService: areasService,private placesService: placesService) { }

  ngOnInit() {
    this.devicesFlag=this.deviceService.getStatus();
    this.areasFlag=this.areaService.getStatus();
    this.placesFlag=this.placesService.getStatus();

  }

}
