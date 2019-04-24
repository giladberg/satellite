import {Places} from "../entities/models/places.model";


export class placesService {
  private someOneCallMe : boolean = false;
  private  places: Places[] = [];

  constructor(){}

  getStatus(){
    return this.someOneCallMe;
  }

  changeStatus(boolean){
    this.someOneCallMe = boolean;
  }

  setPlaces(places: Places[]) {
    for (let place of places){
      // @ts-ignore
      let placeInstance = new Places(place.id, place.type, place.description, place.favorite);
      this.places.push(placeInstance);

    }

  }

  getPlaces() {
    return this.places.slice();
  }
}

