import {Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[error]'
})
export class ErrorDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    elRef.nativeElement.style.visibility='visible';
  }

  ngOnInit() {
    
  }

  @HostListener('mouseenter') mouseover(){
    console.log("dd")
    //this.elRef.nativeElement.style.visibility='visible';
    this.renderer.setStyle(this.elRef.nativeElement,'visibility','visible');
  }

  @HostListener('mouseleave') mouseleave(){
    //this.elRef.nativeElement.style.visibility='hidden';
   this.renderer.setStyle(this.elRef.nativeElement,'visibility','hidden');
  }

}
