import { Component, inject } from '@angular/core';
import { Product } from '../../store/product.model';
import { CommonModule } from '@angular/common';
import { ProductFacade } from '../../store/product.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  // readonly prodFacade = inject(ProductFacade);

  // products: Product[] = [
  //   {
  //     id: '1',
  //     name: 'Product 1',
  //     description: 'Description for Product 1',
  //     price: 10.99,
  //   },
  //   {
  //     id: '2',
  //     name: 'Product 2',
  //     description: 'Description for Product 2',
  //     price: 19.99,
  //   },
  //   {
  //     id: '3',
  //     name: 'Product 3',
  //     description: 'Description for Product 3',
  //     price: 5.99,
  //   },
  // ];  

facade = inject(ProductFacade);
private readonly router = inject(Router);

  products = this.facade.products;
  loading = this.facade.loading;

  ngOnInit() {
    this.facade.loadProducts();
  }

  showDetails(product: Product) {
    // Navigate to the details page for the selected product
    // You can use Angular's Router to navigate to the details page
    // For example:
    // this.router.navigate(['/details', product.id]);
    this.router.navigate(['/products', product.id]);
  }
}
