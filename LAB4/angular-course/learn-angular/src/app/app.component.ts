import { Component } from '@angular/core';
import {AppFirstComponent} from './components-in-angular/components-in-angular.component';
import {AppEventComponent} from './event-handling/event-handling.component';
import {InputComponent} from './input/input.component';

@Component({
  selector: 'app-root',
  imports: [AppFirstComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angular';
}
