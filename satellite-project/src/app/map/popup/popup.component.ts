import {AfterContentChecked, Component, Input, OnInit, ViewChild} from '@angular/core';
import {devicesService} from "../../services/devices.service";
import {areasService} from "../../services/areas.service";
import {placesService} from "../../services/places.service";
import {EntityEnums} from "../../entities/enums/entity.enum";
import {ImagesDictionary} from "../../../assets/images/imagesDictionary";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, AfterContentChecked {
  EntityEnums = EntityEnums;
  data: any;
  nofound:boolean = false;
  userInput:string = '';
  @Input('menuType') menuType;
  @ViewChild('shadowBottom') shadowBottom;
  constructor(private devicesService: devicesService, private areasService: areasService, private placesService: placesService) { }

  ngOnInit() {
    this.getData();

  }
  ngAfterContentChecked() {
    this.getData();
    console.log("aa");
    //console.log(this.devicesService.getNewData());
   // console.log(this.devicesService.getNewData().length);
    if(this.userInput !== ''){
      this.getFillterdData();
    }
  }


  getData(){
    switch (this.menuType) {
      case EntityEnums.DEVICES:
        this.data = this.devicesService.getDevices();
        break;
      case EntityEnums.AREAS:
        this.data = this.areasService.getAreas();
        break;
      case EntityEnums.PLACES:
        this.data = this.placesService.getPlaces();
        break;
      default:
        break;
    }
  }


  fillterData(userInput:string){
    this.userInput=userInput;
    //console.log(userInput);
   // console.log(this.data.length)
    this.devicesService.fillterData(userInput);
  }

  getFillterdData(){
    switch (this.menuType) {
      case EntityEnums.DEVICES:
        this.data = this.devicesService.getNewData();
        break;
      case EntityEnums.AREAS:
        this.data = this.areasService.getAreas();
        break;
      case EntityEnums.PLACES:
        this.data = this.placesService.getPlaces();
        break;
      default:
        break;
    }
  }

}
