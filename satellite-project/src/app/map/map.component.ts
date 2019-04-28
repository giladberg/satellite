import {Component, OnInit} from '@angular/core';
import {EntityEnums} from "../entities/enums/entity.enum";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  EntityEnums = EntityEnums;

  loadedFeature: string = '';
  buttons = [{type: 'Bars-Burger', img: '../../assets/images/icon/BarsBurger.svg'},
    {type: this.EntityEnums.DEVICES, img: '../../assets/images/icon/sensors.svg'},
    {type: this.EntityEnums.AREAS, img: '../../assets/images/icon/noun_polygon_565307_000000.svg'},
    {type: this.EntityEnums.PLACES, img: '../../assets/images/icon/places.svg'}];

  constructor() {
  }

  ngOnInit() {

  }

  _toggleMenu(e, feature?: string) {

    this.loadedFeature = '';
    this.loadedFeature = feature ? feature : '';

  }


  closePopup(e) {
    if (e.relatedTarget === null) {
      this.loadedFeature = '';
    }
  }

  checkToOpenPopup(){
    switch (this.loadedFeature) {
      case EntityEnums.DEVICES:
        return true;
        break;
      case EntityEnums.AREAS:
        return true;
        break;
      case EntityEnums.PLACES:
        return true;
        break;
      default:
        return false;
        break;
    }
  }
}



