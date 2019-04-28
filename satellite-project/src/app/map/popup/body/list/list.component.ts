import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentChecked, Type } from '@angular/core';
import { EntityEnums } from 'src/app/entities/enums/entity.enum';
import { AreasListComponent } from './areas-list/areas-list.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { NoFoundComponent } from './no-found/no-found.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterContentChecked {
  @Input('type') menuType: EntityEnums;
  @Input('noFound') noFound: boolean;
  @Input('data') data: any;

  @ViewChild('list',{read: ViewContainerRef}) list;
  constructor(private resolver: ComponentFactoryResolver ) { }

  ngOnInit() {
    this.setUpList();


  }
  ngAfterContentChecked() {
   this.list.remove(0);
    this.setUpList();
  }

  setComponent(component: any) {
    const singlePostFactory = this.resolver.resolveComponentFactory(component)
    let instance = this.list.createComponent(singlePostFactory, 0).instance;
    instance.data = this.data;
    instance.typeOfNotFound = this.menuType;

  }

  setUpList(){
    if(this.noFound){
      this.setComponent(NoFoundComponent);
    }
    else{
      switch (this.menuType) {
        case EntityEnums.DEVICES:
          this.setComponent(DevicesListComponent);
          break;
        case EntityEnums.AREAS:
          this.setComponent(AreasListComponent);
          break;
        case EntityEnums.PLACES:
          this.setComponent(PlacesListComponent);
          break;
        default:
          break;
      }
    }



  }

  

}
