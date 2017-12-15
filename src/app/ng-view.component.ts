import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'ng-view'
})
export class NgViewComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('ngViewWrapper', elementRef, injector);
  }
}
