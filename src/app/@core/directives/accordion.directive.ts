import { Directive, AfterContentChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AccordionLinkDirective } from './accordion-link.directive';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[accordion]'
})
export class AccordionDirective implements AfterContentChecked {
  protected _navlinks: Array<AccordionLinkDirective> = [];

  constructor(
    private _router: Router
  ) {
    setTimeout(() => this.checkOpenLinks());
  }

  closeOtherLinks(selectedLink: AccordionLinkDirective): void {
    this._navlinks.forEach((link: AccordionLinkDirective) => {
      if (link !== selectedLink) {
        link.selected = false;
      }
    });
  }

  addLink(link: AccordionLinkDirective): void {
    this._navlinks.push(link);
  }

  removeGroup(link: AccordionLinkDirective): void {
    const index = this._navlinks.indexOf(link);
    if (index !== -1) {
      this._navlinks.splice(index, 1);
    }
  }

  checkOpenLinks(): void {
    this._navlinks.forEach((link: AccordionLinkDirective) => {
      if (link.group) {
        const routeUrl = this._router.url;
        const currentUrl = routeUrl.split('/');

        if (currentUrl.indexOf(link.group) > 0) {
          link.selected = true;
          this.closeOtherLinks(link);
        }
      }
    });
  }

  ngAfterContentChecked(): void {
    this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(e => this.checkOpenLinks());
  }
}
