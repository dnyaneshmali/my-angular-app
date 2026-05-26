import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customDir]',
})
export class CustomDirective {
  //@HostBinding('style.backgroundColor') backgroundColor: string = 'red';
  //@HostBinding('class.is-highlighted') isHighlighted: boolean = true;
  constructor(
    private ele: ElementRef,
    private render: Renderer2,
  ) {
  }

  @HostListener('mouseover')
   onMouseOver() {
    this.changeColor('blue');
   }

   @HostListener('mouseleave')
   onMouseLeave() {
    this.changeColor('black');
   }


  changeColor(color: string) {
    this.render.setStyle(this.ele.nativeElement, 'color', color);
  }
}
