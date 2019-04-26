import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
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
export class ListComponent implements OnInit {
  @Input('type') menuType: EntityEnums;
  @Input('noFound') noFound: boolean;
  @ViewChild('list',{read: ViewContainerRef}) list;
  constructor(private resolver: ComponentFactoryResolver ) { }

  ngOnInit() {
    this.setUp();

  }

  setComponent(component: any) {
    const singlePostFactory = this.resolver.resolveComponentFactory(component)
    this.list.createComponent(singlePostFactory);
  }
  setUp(){
    if(this.menuType === EntityEnums.DEVICES){
      if(this.noFound){
        this.setComponent(NoFoundComponent);
      }
      else{
        this.setComponent(DevicesListComponent);
      }
    }
    else if (this.menuType === EntityEnums.AREAS){
      if(this.noFound){
        this.setComponent(NoFoundComponent);
      }
      else{
        this.setComponent(AreasListComponent);
      }
    }
    else if (this.menuType === EntityEnums.PLACES){
      if(this.noFound){
        this.setComponent(NoFoundComponent);
      }
      else{
        this.setComponent(PlacesListComponent);
      }
      
    }
  }

}
