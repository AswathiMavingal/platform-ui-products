const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'products',

  exposes: {
    './Component': './src/app/app.ts',
    './Routes': './src/app/app.routes.ts',
  },

  shared: {
    // ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    '@angular/core': { singleton: true, strictVersion: true },
    '@angular/common': { singleton: true, strictVersion: true },
    '@angular/router': { singleton: true, strictVersion: true },
    '@angular/common/http': { singleton: true, strictVersion: true },

    '@ngrx/store': { singleton: true, strictVersion: true },
    '@ngrx/effects': { singleton: true, strictVersion: true },
    '@ngrx/entity': { singleton: true, strictVersion: true },
  },
});
