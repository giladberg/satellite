import { Component, OnInit, Input } from '@angular/core';
import {ImagesDictionary} from "../../../../../../../assets/images/imagesDictionary";
@Component({
  selector: 'app-devices-item',
  templateUrl: './devices-item.component.html',
  styleUrls: ['./devices-item.component.scss']
})
export class DevicesItemComponent implements OnInit {
  @Input('item') device: any;
  @Input('index') index: number;
  constructor() { }

  ngOnInit() {

  }

  getImageByStatus() {

    switch (this.device.status){
      case 'connected':
          return this.device.type === 'radar' ? ImagesDictionary.RADAR_ONLINE : ImagesDictionary.CAMERA_ONLINE;
      case 'disconnected':
          return this.device.type === 'radar' ? ImagesDictionary.RADAR_OFFLINE : ImagesDictionary.CAMERA_OFFLINE;
      case 'error':
          return this.device.type === 'radar' ? ImagesDictionary.RADAR_ERROR : ImagesDictionary.CAMERA_ERROR;
      case 'no-status':
          return this.device.type === 'radar' ? ImagesDictionary.RADAR : ImagesDictionary.CAMERA;      
    }
     


  }

}
