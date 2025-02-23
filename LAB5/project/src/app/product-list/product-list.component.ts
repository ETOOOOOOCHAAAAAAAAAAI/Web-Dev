import {Component, inject} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {ProductComponent} from '../product/product.component';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,
    ProductComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productsList: Product[] = [];
  productService : ProductService = inject(ProductService);
  category:string;

  constructor() {
    this.category = String(this.route.snapshot.params['categoryName']);
    this.productService.getAllProducts(this.category).then((ProductList: Product[]) => {
      this.productsList = ProductList.map(product => ({
        ...product,
        likes: product.likes ?? 0
      }));
    });
  }

  removeProduct(productToRemove: Product) {
    this.productsList = this.productsList.filter(product => product.id !== productToRemove.id);
  }

}
