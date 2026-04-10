import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [ {
    path: '',
    loadComponent: () => import('./app').then(m => m.App),
    children: [
        {
            path: '',
            loadComponent: () => import('./pages/product-list/product-list').then(m => m.ProductList)
        },
        {
            path: 'details/:id',
            loadComponent: () => import('./pages/details/details').then(m => m.Details)
        }
    ]
  }];
