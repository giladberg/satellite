import { Component, OnInit } from '@angular/core';
import {Target} from "../../../entities/models/target.model";
import {targetsService} from "../../../services/targets.service";

@Component({
  selector: 'app-aside-popup',
  templateUrl: './aside-popup.component.html',
  styleUrls: ['./aside-popup.component.scss']
})
export class AsidePopupComponent implements OnInit {
  targets: Target[];

  constructor(private targetService: targetsService) { }

  ngOnInit() {
    this.targets = this.targetService.getTargets();

  }

}
