import {Component, Input, OnInit} from '@angular/core';
import {ImagesDictionary} from "../../../../../../assets/images/imagesDictionary";
import { EntityEnums } from 'src/app/entities/enums/entity.enum';


@Component({
  selector: 'app-no-found',
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.scss']
})
export class NoFoundComponent implements OnInit {
  @Input() typeOfNotFound:any;
  currnetPopup;
  devices={title: "Devices not found", img:ImagesDictionary.DEVICE_NOT_FOUND};
  areas={title: "Areas not found", img:ImagesDictionary.AREA_NOT_FOUND};
  places={title: "places not found", img:ImagesDictionary.PLACES_NOT_FOUND};
  constructor() { }

  ngOnInit() {
    console.log(this.typeOfNotFound)
    if(this.typeOfNotFound === EntityEnums.DEVICES) {
      this.currnetPopup = this.devices;
    }

    else if(this.typeOfNotFound === EntityEnums.AREAS) {
      this.currnetPopup = this.areas;
    }

    else{
      this.currnetPopup = this.places;
    }
  }

}
