
import { inject, Injectable, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from './product.actions';
import * as ProductSelectors from './product.selectors';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class ProductFacade {
  private store = inject(Store);

  // Convert selectors → signals
//   products = toSignal(this.store.select(ProductSelectors.selectAllProducts), {
//     initialValue: [],
//   });

products = this.store.selectSignal(ProductSelectors.selectAllProducts);

//   loading = toSignal(
//     this.store.select(ProductSelectors.selectProductsLoading),
//     { initialValue: false }
//   );

loading = this.store.selectSignal(ProductSelectors.selectProductsLoading);

getProduct(id: string) {
  return this.store.selectSignal(ProductSelectors.selectProduct(id));
}






  // Optional computed signal
//   productCount = computed(() => this.products().length);

productCount = computed(() => this.products().length);

  loadProducts() {
    this.store.dispatch(ProductActions.loadProducts());
  }

  loadProduct(id: string) {
    // this.store.dispatch(ProductActions.loadProduct({ id }));

    //smart implementation check if the product is already loaded in the store, if not then dispatch the action to load it from API


    const product = this.store.selectSignal(ProductSelectors.selectProduct(id))();

    if (!product) {
        this.store.dispatch(ProductActions.loadProduct({ id }));
    }
  }
}

// import { Injectable, Signal, inject } from "@angular/core";
// import { ProductService } from "../services/product";
// import { Store } from "@ngrx/store";
// import { LoadProducts } from "./product.actions";
// import { Observable } from "rxjs";
// import { Product as IProduct } from "./product.model";
// import { selectAllProducts, getLoading } from "./product.selectors";


// @Injectable(
// //     {
// //     providedIn: 'root'
// // }
// )
// export class ProductFacade {
//     constructor() {}

//     private store = inject(Store);

    
//     readonly _products = this.store.selectSignal(selectAllProducts);
//     readonly _loading = this.store.selectSignal(getLoading);

//     loadProducts() {
//         console.log(this.store);
//         this.store.dispatch(LoadProducts());
//     }     
// }