import { Component, OnInit, ViewChild } from '@angular/core';
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
  deviceFlag: boolean;
  menuType: EntityEnums;
  @ViewChild('shadowBottom') shadowBottom;
  constructor(private deviceService: devicesService,private areaService: areasService,private placesService: placesService) { }

  ngOnInit() {
  
    this.setMenuType(this.deviceService.getStatus(),this.areaService.getStatus(),this.placesService.getStatus());
    this.deviceService.someOneCallMeChanged.subscribe((deviceFlag: boolean) => {
     if(deviceFlag){
      this.setMenuType(true,false,false);
     }
    })
    this.areaService.someOneCallMeChanged.subscribe((areaFlag) => {
      if(areaFlag){
        this.setMenuType(false,true,false);
       }
    })
    this.placesService.someOneCallMeChanged.subscribe((placeFlag) => {
      if(placeFlag){
        this.setMenuType(false,false,true);
       }
    })
    
     
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
