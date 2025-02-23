import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../product';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product !: Product;
  @Output() productRemoved = new EventEmitter<Product>();


  likeProduct() {
    this.product.likes++;
  }

  getWhatsappLink(link: string): string {
    return `https://wa.me/?text=${encodeURIComponent(link)}`;
  }

  getTelegramLink(link: string): string {
    return `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(this.product.name)}`;
  }

  removeProduct() {
    this.productRemoved.emit(this.product);
  }
}
