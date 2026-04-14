import { Routes } from '@angular/router';
import { App } from './app';
// import { productReducer } from './store/product.reducer';
import { ProductEffects } from './store/product.effects';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ProductFacade } from './store/product.facade';
import { productFeatureKey, productReducer } from './store/product.reducer';

export const routes: Routes = [ {
    path: '',
    loadComponent: () => import('./app').then(m => m.App),
     providers: [
    //   provideState('products', productReducer),
    // //   provideEffects([ProductEffects]), //on deleting this i am able to redirect to product route
    //   ProductFacade   // ✅ IMPORTANT

      provideState(productFeatureKey, productReducer),
      provideEffects(ProductEffects),
    ],
    children: [
        {
            path: '',
            loadComponent: () => import('./pages/product-list/product-list').then(m => m.ProductList)
        },
        {
            path: ':id',
            loadComponent: () => import('./pages/details/details').then(m => m.Details)
        }
    ]
  }];
