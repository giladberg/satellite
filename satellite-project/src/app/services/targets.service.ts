import {Target} from "../entities/models/target.model";


export class targetsService {

  private  target: Target[] = [];

  constructor(){}

  setTargets(targets: Target[]) {
    for (let target of targets){
      // @ts-ignore
      let targetInstance = new Target(target.id, target.type, target.description, target.status, target.serial, target.hidden, target.color);
      this.target.push(targetInstance);

    }
    

  }

  getTargets() {
    return this.target.slice();
  }
}

