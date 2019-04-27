import { Component, OnInit, Input } from '@angular/core';
import { Target } from 'src/app/entities/models/target.model';

@Component({
  selector: 'app-aside-right-popup-item',
  templateUrl: './aside-right-popup-item.component.html',
  styleUrls: ['./aside-right-popup-item.component.scss']
})
export class AsideRightPopupItemComponent implements OnInit {
  @Input('item') target: Target;
  constructor() { }

  ngOnInit() {
    
  }

}
