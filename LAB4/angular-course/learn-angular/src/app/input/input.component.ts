import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <p>The user's name is {{username}}</p>
  `,
})
export class InputComponent {
  @Input() username = 'youngTech';
}
