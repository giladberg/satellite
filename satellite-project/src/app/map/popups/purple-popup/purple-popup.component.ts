import { Component, OnInit } from '@angular/core';
import {Places} from "../../../entities/models/places.model";
import {placesService} from "../../../services/places.service";

@Component({
  selector: 'app-purple-popup',
  templateUrl: './purple-popup.component.html',
  styleUrls: ['./purple-popup.component.scss']
})
export class PurplePopupComponent implements OnInit {
  places: Places[];
  constructor(private placesService: placesService) { }

  ngOnInit() {
    this.places = this.placesService.getPlaces();

  }

}
