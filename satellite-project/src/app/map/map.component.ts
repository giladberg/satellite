import {Component, OnInit} from '@angular/core';
import {devicesService} from "../services/devices.service";
import {areasService} from "../services/areas.service";
import {placesService} from "../services/places.service";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  loadedFeature: string = '';
  popupOpen: boolean = false;
  buttons = [{type:'Bars-Burger',img:'../../assets/images/icon/BarsBurger.svg'},{type:'devices', img:'../../assets/images/icon/sensors.svg'},{type:'areas',img:'../../assets/images/icon/noun_polygon_565307_000000.svg'},{type:'places',img:'../../assets/images/icon/places.svg'}];
  constructor(private deviceService: devicesService,private areaService: areasService,private placesService: placesService) { }

  ngOnInit() {

  }

  _toggleMenu(e , feature?: string) {
    // console.log(e);
    // if (!(e.relatedTarget.tagName  === 'INPUT')) {
      this.popupOpen = !this.popupOpen;
      this.loadedFeature = feature ? feature : '';
      this.popupSelected(feature);
    // }
  }

  popupSelected(feature: string){
    if(feature === 'devices'){
      this.deviceService.changeStatus(true);
      this.areaService.changeStatus(false);
      this.placesService.changeStatus(false);
    }
   else if(feature === 'areas'){
      this.deviceService.changeStatus(false);
      this.areaService.changeStatus(true);
      this.placesService.changeStatus(false);
    }
    else if(feature === 'places'){
      this.deviceService.changeStatus(false);
      this.areaService.changeStatus(false);
      this.placesService.changeStatus(true);
    }
    else if (feature === 'aside'){
      this.deviceService.changeStatus(false);
      this.areaService.changeStatus(false);
      this.placesService.changeStatus(false);
    }
    else{
      this.deviceService.changeStatus(false);
      this.areaService.changeStatus(false);
      this.placesService.changeStatus(false);
    }
  }







  }



