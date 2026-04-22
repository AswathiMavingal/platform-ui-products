import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList } from './product-list';
import { ProductFacade } from '../../store/product.facade';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { signal } from '@angular/core';
describe('ProductList', () => {
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;
  let mockProductFacade: any;
  let mockActivatedRoute: any;
  const mockProducts = [
    { id: '1', name: 'Product 1', description: 'Description 1', price: 10 },
    { id: '2', name: 'Product 2', description: 'Description 2', price: 20 },
  ];
  
  beforeEach(async () => {
     mockProductFacade = {
      products: signal(mockProducts),
      loadProducts: vi.fn(),
      getProduct: vi.fn().mockReturnValue(signal(mockProducts[0])),
    };
    await TestBed.configureTestingModule({
      imports: [ProductList],
      providers: [
        { provide: ProductFacade, useValue: mockProductFacade },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
