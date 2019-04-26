import { Component, OnInit } from '@angular/core';
import {devicesService} from "../../../../../services/devices.service";
import {Device} from "../../../../../entities/models/devices.model";


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

  
}
