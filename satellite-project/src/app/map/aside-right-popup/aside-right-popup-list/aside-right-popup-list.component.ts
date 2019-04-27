import { Component, OnInit, Input } from '@angular/core';
import { Target } from 'src/app/entities/models/target.model';

@Component({
  selector: 'app-aside-right-popup-list',
  templateUrl: './aside-right-popup-list.component.html',
  styleUrls: ['./aside-right-popup-list.component.scss']
})
export class AsideRightPopupListComponent implements OnInit {
  @Input('data') targets: Target;
  constructor() { }

  ngOnInit() {
    console.log(this.targets)
  }

}
