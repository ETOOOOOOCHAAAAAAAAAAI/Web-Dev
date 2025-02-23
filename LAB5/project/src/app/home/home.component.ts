import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import {RouterModule} from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = [
    { name: 'phones', displayName: 'Phones', image: 'assets/images/category-phones/phones-icon.png' },
    { name: 'laptops', displayName: 'Laptops', image: 'assets/images/category-laptops/laptop-icon.png' },
    { name: 'playstations', displayName: 'PlayStations', image: 'assets/images/category-playstation/playstation-icon.png' },
    { name: 'tv', displayName: 'TV', image: 'assets/images/category-tv/tv-icon.png' },
    { name: 'earphones', displayName: 'Earphones', image: 'assets/images/category-earphones/earphones-icon.png' }
  ];
}
