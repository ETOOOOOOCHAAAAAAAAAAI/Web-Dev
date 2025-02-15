import {Component} from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    Hello Universe
  `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
})
export class AppFirstComponent {}
