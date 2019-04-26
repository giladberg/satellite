import { Component, OnInit } from '@angular/core';
import {devicesService} from "../../../../../services/devices.service";
import {areasService} from "../../../../../services/areas.service";
import {placesService} from "../../../../../services/places.service";
import {ImagesDictionary} from "../../../../../../assets/images/imagesDictionary";


@Component({
  selector: 'app-no-found',
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.scss']
})
export class NoFoundComponent implements OnInit {
  currnetPopup;
  devices={title: "Devices not found", img:ImagesDictionary.DEVICE_NOT_FOUND};
  areas={title: "Areas not found", img:ImagesDictionary.AREA_NOT_FOUND};
  places={title: "places not found", img:ImagesDictionary.PLACES_NOT_FOUND};
  constructor(private deviceService: devicesService,private areaService: areasService,private placesService: placesService) { }

  ngOnInit() {
    if(this.deviceService.getStatus() === true) {
      this.currnetPopup = this.devices;
    }

    else if(this.areaService.getStatus() === true) {
      this.currnetPopup = this.areas;
    }

    else{
      this.currnetPopup = this.places;
    }
  }

}
