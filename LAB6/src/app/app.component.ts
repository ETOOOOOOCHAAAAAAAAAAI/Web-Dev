import { Component } from '@angular/core';
import {RouterLinkActive, RouterOutlet} from '@angular/router';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab6';
}
