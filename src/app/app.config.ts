import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import { productReducer } from './store/product.reducer';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // // provideStore(),
    // provideEffects(),
    //  provideEffects([ProductEffects]),  // ✅ REGISTER your effect
    // // provideEffects([ProductEffects]),
    // provideHttpClient()
    
  ],
};
