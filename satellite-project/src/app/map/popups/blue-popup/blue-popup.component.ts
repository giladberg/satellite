import { Component, OnInit } from '@angular/core';

import {Device} from "../../../entities/models/devices.model";
import { devicesService } from "../../../services/devices.service"

@Component({
  selector: 'app-blue-popup',
  templateUrl: './blue-popup.component.html',
  styleUrls: ['./blue-popup.component.scss']
})
export class BluePopupComponent implements OnInit {
  devices: Device[];

  constructor(private deviceService: devicesService) { }

  ngOnInit() {
    this.devices = this.deviceService.getDevices();
  }

  onFocus(e) {
    console.log('onFocus', e);
  }
}
