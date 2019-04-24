import {Areas} from "../entities/models/areas.model";


export class areasService {
  private someOneCallMe : boolean = false;
  private  areas: Areas[] = [];

  constructor(){}

  getStatus(){
    return this.someOneCallMe;
  }

  changeStatus(boolean){
    this.someOneCallMe = boolean;
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

