
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productAdapter, ProductState } from './product.state';
import { productFeatureKey } from './product.reducer';

const selectProductState =
  createFeatureSelector<ProductState>(productFeatureKey);

const { selectAll, selectEntities } = productAdapter.getSelectors();

export const selectAllProducts = createSelector(
  selectProductState,
  selectAll
);

export const selectProductsLoading = createSelector(
  selectProductState,
  (state) => state.loading
);

// import { createFeatureSelector, createSelector } from "@ngrx/store";
// import { adapter, ProductState } from "./product.reducer";
// import { map } from "rxjs/operators";
// import { pipe } from "rxjs";
// export const getProductState = createFeatureSelector<ProductState>('products');

// export const getLoading = createSelector(
//     getProductState,
//     (state: ProductState) => state.loading
// );


// export const {
//     selectAll: selectAllProducts,
//     selectEntities: selectProductEntities,
//     selectIds: selectProductIds,
//     selectTotal: selectProductTotal,
// } = adapter.getSelectors(getProductState);