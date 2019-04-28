import {Device} from "../entities/models/devices.model";
import { EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';


export class devicesService {
  someOneCallMeChanged = new EventEmitter<boolean>();
  private newData: Device[] =[];
  private someOneCallMe : boolean = false;
  private devices: Device[] = [];
  private currentUserInput: string = ""

  constructor() {
  }



  getStatus(){
    return this.someOneCallMe;
  }

  changeStatus(boolean){
    this.someOneCallMe = boolean;
    this.someOneCallMeChanged.emit(boolean);
  }

  setDevices(devices: Device[]) {
    for (let device of devices) {
      let deviceInstance = new Device(device.id,device.type, device.name, device.description, device.status);
      this.devices.push(deviceInstance);
    }

  }

  getDevices() {
    return this.devices.slice();
  }

  fillterData(userInput: string) {
    this.newData = [];
        this.currentUserInput = userInput;
      this.devices.forEach((device) => {
        if(device.name.toLowerCase().includes(userInput.toLowerCase())){
          this.newData.push(device);
        }
      })




  }
  getNewData() {
    return this.newData.slice();
  }
}

