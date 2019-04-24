import { Component, OnInit } from '@angular/core';
import {devicesService} from "../../../../services/devices.service";
import {Device} from "../../../../entities/models/devices.model";
import {ImagesDictionary} from "../../../../../assets/images/imagesDictionary";

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {
  devices: Device[];
  constructor(private deviceService: devicesService) { }

  ngOnInit() {
    this.devices = this.deviceService.getDevices();
  }

  getImagByStatus() {
    // switch case on the .status field
    // case connected return item.type === Type.RADAR ? ImagesDictionary.RADAR_ONLINE : ImagesDictionary.CAMERA_ONLINE

  }
}
