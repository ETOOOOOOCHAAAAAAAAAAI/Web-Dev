import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/';

  constructor() {
  }


  async getAllProducts(category:string): Promise<Product[]> {
    const data = await fetch(this.url + category);
    return await data.json() ?? [];
  }



}
