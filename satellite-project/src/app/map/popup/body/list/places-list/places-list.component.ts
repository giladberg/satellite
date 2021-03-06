import {Component, Input, OnInit} from '@angular/core';
import {Places} from "../../../../../entities/models/places.model";


@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  places: Places[];
  @Input() data:any;
  
  constructor() { }

  ngOnInit() {
    this.places = this.data;
  }

}
