import { EntityState, createEntityAdapter } from '@ngrx/entity';

// https://chatgpt.com/c/69dca936-a4dc-8321-9d77-77ab77b0012e

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface ProductState extends EntityState<Product> {
  loading: boolean;
  error: string | null;
}

export const productAdapter = createEntityAdapter<Product>({
  selectId: (product: Product) => product.id,
  sortComparer: (a: Product, b: Product) => a.name.localeCompare(b.name),
});

export const initialState: ProductState = productAdapter.getInitialState({
  loading: false,
  error: null,
});
