import {Device} from "../entities/models/devices.model";



export class devicesService {
  private someOneCallMe : boolean = false;
  private devices: Device[] = [];

  constructor() {
  }

  getStatus(){
    return this.someOneCallMe;
  }

  changeStatus(boolean){
    this.someOneCallMe = boolean;
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
}

