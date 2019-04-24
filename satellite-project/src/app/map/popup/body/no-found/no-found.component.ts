import { Component, OnInit } from '@angular/core';
import {devicesService} from "../../../../services/devices.service";
import {areasService} from "../../../../services/areas.service";
import {placesService} from "../../../../services/places.service";


@Component({
  selector: 'app-no-found',
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.scss']
})
export class NoFoundComponent implements OnInit {
  currnetPopup;
  devices={title: "Devices not found", img:"../../assets/images/icon/noun_filter_787737_000000.svg"};
  areas={title: "Areas not found", img:"../../assets/images/logo/Areas not found.svg"};
  places={title: "places not found", img:"../../assets/images/logo/Places not foubd.svg"};
  constructor(private deviceService: devicesService,private areaService: areasService,private placesService: placesService) { }

  ngOnInit() {
    if(this.deviceService.getStatus() === true) {
      this.currnetPopup = this.devices;
    }

    else if(this.areaService.getStatus() === true) {
      this.currnetPopup = this.areas;
    }

    else{
      this.currnetPopup = this.areas
    }
  }

}
