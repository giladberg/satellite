import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import {devicesService} from "./services/devices.service";
import {areasService} from "./services/areas.service";
import {placesService} from "./services/places.service";
import {ErrorDirective} from "./directives/error.directive";
import {targetsService} from "./services/targets.service";
import { PopupComponent } from './map/popup/popup.component';
import { DevicesListComponent } from './map/popup/body/list/devices-list/devices-list.component';
import { AreasListComponent } from './map/popup/body/list/areas-list/areas-list.component';
import { PlacesListComponent } from './map/popup/body/list/places-list/places-list.component';
import { NoFoundComponent } from './map/popup/body/list/no-found/no-found.component';
import { HeaderComponent } from './map/popup/headers/header/header.component';
import { ListComponent } from './map/popup/body/list/list.component';
import { DevicesItemComponent } from './map/popup/body/list/devices-list/devices-item/devices-item.component';
import { AreasItemComponent } from './map/popup/body/list/areas-list/areas-item/areas-item.component';
import { PlacesItemComponent } from './map/popup/body/list/places-list/places-item/places-item.component';
import { PlacesItemFavoriteComponent } from './map/popup/body/list/places-list/places-item-favorite/places-item-favorite.component';
import { AsideRightPopupComponent } from './map/aside-right-popup/aside-right-popup.component';
import { AsideRightPopupListComponent } from './map/aside-right-popup/aside-right-popup-list/aside-right-popup-list.component';
import { AsideRightPopupItemComponent } from './map/aside-right-popup/aside-right-popup-list/aside-right-popup-item/aside-right-popup-item.component';
import {FilterDevicesPipe} from "./pipes/devicesFilter.pipe";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    ErrorDirective,
    PopupComponent,
    HeaderComponent,
    ListComponent,
    DevicesListComponent,
    AreasListComponent,
    PlacesListComponent,
    NoFoundComponent,
    DevicesItemComponent,
    AreasItemComponent,
    PlacesItemComponent,
    PlacesItemFavoriteComponent,
    AsideRightPopupComponent,
    AsideRightPopupListComponent,
    AsideRightPopupItemComponent,
    FilterDevicesPipe
   
  ],
  entryComponents: [
    DevicesListComponent,
    AreasListComponent,
    PlacesListComponent,
    NoFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [devicesService, areasService, placesService, targetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
