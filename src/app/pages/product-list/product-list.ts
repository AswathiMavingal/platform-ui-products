import { Component } from '@angular/core';
import { Product } from '../../services/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10.99,
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 19.99,
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 5.99,
    },
  ];  
}
