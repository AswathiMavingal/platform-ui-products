import { Component, inject } from '@angular/core';
import { ProductFacade } from '../../store/product.facade';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {

  facade = inject(ProductFacade);
  router = inject(ActivatedRoute);

  productId = this.router.snapshot.paramMap.get('id')!; 

  product = this.facade.getProduct(this.productId);

  ngOnInit() {
    this.facade.loadProduct(this.productId);
  }
}
