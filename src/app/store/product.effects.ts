
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';
import { ProductService } from '../services/product';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);
  private service = inject(ProductService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>
        this.service.getProducts().pipe(
          map((products) =>
            ProductActions.loadProductsSuccess({ products })
          ),
          catchError((err) =>
            of(ProductActions.loadProductsFailure({ error: err.message }))
          )
        )
      )
    )
  );

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProduct),
        mergeMap(({ id }) =>
            this.service.getProduct(id).pipe(
                map((product) =>
                    ProductActions.loadProductSuccess({ product })
                ),  
                catchError((err) =>
                    of(ProductActions.loadProductFailure({ error: err.message }))
                )
            )
        )
    )
  );
}

// import {Actions, createEffect, ofType} from '@ngrx/effects';
// import {Injectable} from '@angular/core';
// import {ProductService} from '../services/product';
// import {catchError, map, of, switchMap, tap} from 'rxjs';
// import {ProductActionTypes, LoadProducts, LoadProductsFailure, LoadProductsSuccess} from './product.actions';

// @Injectable()
// export class ProductEffects {
//     constructor(private productService: ProductService, private actions$: Actions) {

//         console.log('Actions:', this.actions$);
//     }  
//     loadProducts$ = createEffect(() =>
//         this.actions$.pipe(
//             ofType(LoadProducts),
//             tap(action => console.log('Effect sees:', action)),
//             switchMap(() =>{

//             return    this.productService.getProducts().pipe(
//                     map(products => LoadProductsSuccess(products)),
//                     catchError(error => of(LoadProductsFailure(error.message)))
//                 )

//             }
//             )
//         )

//     );
// }