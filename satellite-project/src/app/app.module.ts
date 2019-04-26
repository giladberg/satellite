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
   
  ],
  entryComponents: [
    DevicesListComponent,
    AreasListComponent,
    PlacesListComponent,
    NoFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [devicesService, areasService, placesService, targetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
