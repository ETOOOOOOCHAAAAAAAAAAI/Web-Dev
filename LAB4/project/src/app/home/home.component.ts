import {Component, inject} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {ProductComponent} from '../product/product.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule,
    ProductComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productsList: Product[] = [];
  productService : ProductService = inject(ProductService);

  constructor() {
    this.productService.getAllProducts().then((ProductList: Product[]) => this.productsList = ProductList);
  }

}
