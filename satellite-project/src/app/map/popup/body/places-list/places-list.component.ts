import { Component, OnInit } from '@angular/core';
import {Places} from "../../../../entities/models/places.model";
import {placesService} from "../../../../services/places.service";

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  places: Places[];
  constructor(private placesService: placesService) { }

  ngOnInit() {
    this.places = this.placesService.getPlaces();
  }

}
