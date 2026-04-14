import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { productAdapter, initialState } from './product.state';

export const productFeatureKey = 'products';

export const productReducer = createReducer(
  initialState,

  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
  })),

  on(ProductActions.loadProductsSuccess, (state, { products }) =>
    productAdapter.setAll(products, {
      ...state,
      loading: false,
    })
  ),

  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(ProductActions.loadProduct, (state) => ({
    ...state,
    loading: true,
  })),
  on(ProductActions.loadProductSuccess, (state, { product }) => productAdapter.upsertOne(product, {
    ...state,
    loading: false,
  })),
  on(ProductActions.loadProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: null,
  }))

);

// import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// import {Product} from './product.model';
// // import {ProductActions, ProductActionTypes} from './product.actions';
// import { ProductActionTypes, ProductActions } from './product.actions';
// import { Action } from '@ngrx/store';  

// export interface ProductState extends EntityState<Product> {
//     loading: boolean;
//     error: string | null;
// }

// export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
//     selectId: (product) => product.id,
//     sortComparer: (a, b) => a.name.localeCompare(b.name),
// });

// export const initialState: ProductState = adapter.getInitialState({
//     loading: false,
//     error: null,
// });

// export function productReducer(
//     state: ProductState|undefined = initialState,
//     action: Action
// ): ProductState {
//     const productAction = action as ProductActions; 
//     switch (productAction.type) {
//         case ProductActionTypes.LoadProducts:
//             console.log('Loading products...');
//             return {
//                 ...state,
//                 loading: true,
//                 error: null,
//             };
//         case ProductActionTypes.LoadProductsSuccess:
//             console.log('Products loaded successfully:', productAction.products);
//             return adapter.setAll(productAction.products, {
//                 ...state,
//                 loading: false,
//             });
//         case ProductActionTypes.LoadProductsFailure:
//             console.error('Failed to load products:', productAction.error);
//             return {
//                 ...state,
//                 loading: false,
//                 error: productAction.error,
//             };
//         case ProductActionTypes.CreateProductSuccess:
//             return adapter.addOne(productAction.product, state);
//         case ProductActionTypes.UpdateProductSuccess:
//             return adapter.updateOne(
//                 {id: productAction.product.id, changes: productAction.product},
//                 state
//             );
//         case ProductActionTypes.DeleteProductSuccess:
//             return adapter.removeOne(productAction.id, state);
//         default:
//             return state || initialState;
//     }
// }