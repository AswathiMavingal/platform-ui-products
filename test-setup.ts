import { beforeEach } from 'vitest';
// import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

// //didnt work
// beforeEach(() => {
//   TestBed.configureTestingModule({
//     providers: [
//       provideMockStore({ initialState: {} })
//     ]
//   });
// });


// import 'zone.js';
// import 'zone.js/testing';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// Initialize Angular testing environment ONCE
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);