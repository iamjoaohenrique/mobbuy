import { Directive, HostListener, Inject } from '@angular/core';
import { AccordionLinkDirective } from './accordion-link.directive';

@Directive({
  selector: '[accordion-anchor]'
})
export class AccordionAnchorDirective {
  protected _navlink: AccordionLinkDirective;

  constructor(
    @Inject(AccordionLinkDirective) navlink: AccordionLinkDirective
  ) {
    this._navlink = navlink;
  }

  @HostListener('click', ['$event'])
  onClick(e: any): void {
    this._navlink.toggle();
  }
}
