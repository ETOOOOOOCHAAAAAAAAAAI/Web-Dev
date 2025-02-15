import {Component, Input} from '@angular/core';
import {Product} from '../product';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product !: Product;

  getWhatsappLink(link: string): string {
    return `https://wa.me/?text=${encodeURIComponent(link)}`;
  }

  getTelegramLink(link: string): string {
    return `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(this.product.name)}`;
  }

}
