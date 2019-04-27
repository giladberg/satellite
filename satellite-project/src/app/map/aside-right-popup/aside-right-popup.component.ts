import { Component, OnInit } from '@angular/core';
import { targetsService } from 'src/app/services/targets.service';
import { Target } from 'src/app/entities/models/target.model';


@Component({
  selector: 'app-aside-right-popup',
  templateUrl: './aside-right-popup.component.html',
  styleUrls: ['./aside-right-popup.component.scss']
})
export class AsideRightPopupComponent implements OnInit {
  targets: Target[];
  constructor(private targetService: targetsService) { }

  ngOnInit() {
    
    this.targets = this.targetService.getTargets();
    
  }

}
