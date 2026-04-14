import { createAction, props } from '@ngrx/store';
import { Product } from './product.state';

export const loadProducts = createAction('[Products] Load');

export const loadProductsSuccess = createAction(
  '[Products] Load Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Failure',
  props<{ error: string }>()
);

// import { createAction } from "@ngrx/store";
// import { Product } from "./product.model";

// export enum ProductActionTypes {
//     LoadProducts = '[Product] Load Products',
//     LoadProductsSuccess = '[Product] Load Products Success',
//     LoadProductsFailure = '[Product] Load Products Failure',
//     CreateProduct = '[Product] Create Product',
//     CreateProductSuccess = '[Product] Create Product Success',
//     UpdateProduct = '[Product] Update Product',
//     UpdateProductSuccess = '[Product] Update Product Success',
//     DeleteProduct = '[Product] Delete Product',
//     DeleteProductSuccess = '[Product] Delete Product Success',
// }

// export const LoadProducts = createAction(ProductActionTypes.LoadProducts);
// export const LoadProductsSuccess = createAction(
//     ProductActionTypes.LoadProductsSuccess,
//     (products: Product[]) => ({ products })
// );
// export const LoadProductsFailure = createAction(
//     ProductActionTypes.LoadProductsFailure,
//     (error: string) => ({ error })
// );
// export const CreateProduct = createAction(
//     ProductActionTypes.CreateProduct,
//     (product: Product) => ({ product })
// );
// export const CreateProductSuccess = createAction(
//     ProductActionTypes.CreateProductSuccess,
//     (product: Product) => ({ product })
// );
// export const UpdateProduct = createAction(
//     ProductActionTypes.UpdateProduct,
//     (product: Product) => ({ product })
// );
// export const UpdateProductSuccess = createAction(
//     ProductActionTypes.UpdateProductSuccess,
//     (product: Product) => ({ product })
// );
// export const DeleteProduct = createAction(
//     ProductActionTypes.DeleteProduct,
//     (id: string) => ({ id })
// );
// export const DeleteProductSuccess = createAction(
//     ProductActionTypes.DeleteProductSuccess,
//     (id: string) => ({ id })
// );

// export type ProductActions = 

//   | ReturnType<typeof LoadProducts>
//   | ReturnType<typeof LoadProductsSuccess>
//   | ReturnType<typeof LoadProductsFailure>
//   | ReturnType<typeof CreateProduct>
//   | ReturnType<typeof CreateProductSuccess>
//   | ReturnType<typeof UpdateProduct>
//   | ReturnType<typeof UpdateProductSuccess>
//   | ReturnType<typeof DeleteProduct>
//   | ReturnType<typeof DeleteProductSuccess>