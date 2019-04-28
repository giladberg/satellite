import {Component, OnInit, Input, ViewChild, Renderer2, AfterContentChecked, Output, EventEmitter} from '@angular/core';
import { EntityEnums } from 'src/app/entities/enums/entity.enum';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  devicesHeader  = {type:"devices",amount:"22",clipPath:"polygon(0 100%, 100% 100%, 100% 7%, 20% 7%, 16% 1%, 13% 7%, 0 7%)",backgroundImage:"linear-gradient(to right, #098bff, #00b2ff, #00cfee)"};
  areasHeader  = {type:"areas",amount:"22",clipPath:"polygon(0 100%, 100% 100%, 100% 7%, 38% 7%, 34% 0, 31% 7%, 0 7%)",backgroundImage:"linear-gradient(to right, #0097a7, #ccff90)"};
  placesHeader  = {type:"places",amount:"22",clipPath:"polygon(0 100%, 100% 100%, 100% 8%, 53% 8%, 50% 0, 47% 8%, 0 8%)",backgroundImage:"linear-gradient(to right, #7b1fa2, #7c4dff)"};
  currentHeader ;
  @Input('type') menuType: EntityEnums;
  @ViewChild('header') header;
  filteredName = '';
  @Output() userInput = new EventEmitter<string>();
  
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.setHeader();
  }
  ngAfterContentChecked() {
    this.setHeader();
    this.onUserInput();
  }
  onUserInput(){
    this.userInput.emit( this.filteredName);
  }

  setHeader() {
    if(this.menuType === EntityEnums.DEVICES){
      this.currentHeader = this.devicesHeader;
    }
    else if(this.menuType === EntityEnums.AREAS){
      this.currentHeader = this.areasHeader;
    }
    else{
      this.currentHeader = this.placesHeader;
    }
    this.renderer.setStyle(this.header.nativeElement,'clip-path',this.currentHeader.clipPath);
    this.renderer.setStyle(this.header.nativeElement,'background-image',this.currentHeader.backgroundImage);
  }

}
