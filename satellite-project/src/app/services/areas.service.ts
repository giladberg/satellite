import {Areas} from "../entities/models/areas.model";
import { EventEmitter } from '@angular/core';


export class areasService {
  someOneCallMeChanged = new EventEmitter<boolean>();
  private someOneCallMe : boolean = false;
  private  areas: Areas[] = [];

  constructor(){}

  getStatus(){
    return this.someOneCallMe;
  }

  changeStatus(boolean){
    this.someOneCallMe = boolean;
    this.someOneCallMeChanged.emit(boolean);
  }

  setAreas(areas: Areas[]) {
    for (let area of areas){
      let areaInstance = new Areas(area.id, area.type, area.description, area.shape);
      this.areas.push(areaInstance);

    }

  }

  getAreas() {
    return this.areas.slice();
  }
}

