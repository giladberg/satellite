import {Places} from "../entities/models/places.model";
import { EventEmitter } from '@angular/core';


export class placesService {
  someOneCallMeChanged = new EventEmitter<boolean>();
  private someOneCallMe : boolean = false;
  private  places: Places[] = [];

  constructor(){}

  getStatus(){
    return this.someOneCallMe;
  }

  changeStatus(boolean){
    this.someOneCallMe = boolean;
    this.someOneCallMeChanged.emit(boolean);
  }

  setPlaces(places: Places[]) {
    for (let place of places){
      
      let placeInstance = new Places(place.id, place.type, place.description, place.favorite);
      this.places.push(placeInstance);

    }

  }

  getPlaces() {
    return this.places.slice();
  }
}

