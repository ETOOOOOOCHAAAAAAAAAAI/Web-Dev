import {Component} from '@angular/core';
import {ChildComponent} from '../output-child/output-child.component';

@Component({
  selector: 'app-root',
  template: `
    <app-child (addItemEvent)="addItem($event)"/>
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  imports: [ChildComponent, ChildComponent],
})
export class AppComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
