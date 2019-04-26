import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-places-item-favorite',
  templateUrl: './places-item-favorite.component.html',
  styleUrls: ['./places-item-favorite.component.scss']
})
export class PlacesItemFavoriteComponent implements OnInit {
  @Input('item') place: any;
  constructor() { }

  ngOnInit() {
  }

}
