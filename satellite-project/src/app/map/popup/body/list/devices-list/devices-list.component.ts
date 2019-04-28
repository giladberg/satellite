import {Component, Input, OnInit} from '@angular/core';

import {Device} from "../../../../../entities/models/devices.model";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {
  @Input() data:any;
  devices: Device[];
  stringToFillter: string = '';
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    
     this.devices = this.data;
    // this.subscription = this.deviceService.deviceStringToFillter.subscribe((string: string) => {
    //   this.stringToFillter = string;
    //   console.log(this.stringToFillter);
    // })

  }

  
}
