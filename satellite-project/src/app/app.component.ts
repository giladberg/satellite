import {Component, OnInit} from '@angular/core';
// @ts-ignore
import devicesJson from './devices.json';
// @ts-ignore
import areasJson from './areas.json';
// @ts-ignore
import placesJson from './places.json';
// @ts-ignore
import targetJson from './target.json';

import { devicesService } from "./services/devices.service";
import { areasService } from "./services/areas.service"
import {placesService} from "./services/places.service";
import {targetsService} from "./services/targets.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'satellite-project';



  constructor(private deviceService: devicesService, private areasService: areasService, private placesService: placesService,private targetsService:targetsService ) { }

  ngOnInit() {

    this.deviceService.setDevices(devicesJson);
    this.areasService.setAreas(areasJson);
    this.placesService.setPlaces(placesJson);
    this.targetsService.setTargets(targetJson);

  }

}
