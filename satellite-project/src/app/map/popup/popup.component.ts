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
  noFound:boolean = false;
  menuType: EntityEnums;
  constructor(private deviceService: devicesService,private areaService: areasService,private placesService: placesService) { }

  ngOnInit() {
    this.setMenuType(this.deviceService.getStatus(),this.areaService.getStatus(),this.placesService.getStatus());
    console.log(this.menuType);

  }

  setMenuType(deviceStatus: boolean, areasStatus: boolean, placesStatus: boolean) {
    if(deviceStatus){
      this.menuType = EntityEnums.DEVICES;
    }
    else if(areasStatus) {
      this.menuType = EntityEnums.AREAS
    }
    else{
      this.menuType =EntityEnums.PLACES
    }
  }

}
