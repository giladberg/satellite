import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { BluePopupComponent } from './map/popups/blue-popup/blue-popup.component';
import { TurquoisePopupComponent } from './map/popups/turquoise-popup/turquoise-popup.component';
import { PurplePopupComponent } from './map/popups/purple-popup/purple-popup.component';
import { AsidePopupComponent } from './map/popups/aside-popup/aside-popup.component';
import { NoFoundBluePopupComponent } from './map/popups/no-found-blue-popup/no-found-blue-popup.component';
import { NoFoundTurquoisePopupComponent } from './map/popups/no-found-turquoise-popup/no-found-turquoise-popup.component';
import { NoFoundPurplePopupComponent } from './map/popups/no-found-purple-popup/no-found-purple-popup.component';
import {devicesService} from "./services/devices.service";
import {areasService} from "./services/areas.service";
import {placesService} from "./services/places.service";
import {ErrorDirective} from "./directives/error.directive";
import {targetsService} from "./services/targets.service";
import { PopupComponent } from './map/popup/popup.component';
import { DevicesHeaderComponent } from './map/popup/headers/devices-header/devices-header.component';
import { AreasHeaderComponent } from './map/popup/headers/areas-header/areas-header.component';
import { PlacesHeaderComponent } from './map/popup/headers/places-header/places-header.component';
import { DevicesListComponent } from './map/popup/body/devices-list/devices-list.component';
import { AreasListComponent } from './map/popup/body/areas-list/areas-list.component';
import { PlacesListComponent } from './map/popup/body/places-list/places-list.component';
import { NoFoundComponent } from './map/popup/body/no-found/no-found.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    BluePopupComponent,
    TurquoisePopupComponent,
    PurplePopupComponent,
    AsidePopupComponent,
    NoFoundBluePopupComponent,
    NoFoundTurquoisePopupComponent,
    NoFoundPurplePopupComponent,
    ErrorDirective,
    PopupComponent,
    DevicesHeaderComponent,
    AreasHeaderComponent,
    PlacesHeaderComponent,
    DevicesListComponent,
    AreasListComponent,
    PlacesListComponent,
    NoFoundComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [devicesService, areasService, placesService, targetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
