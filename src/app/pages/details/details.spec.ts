import { TestBed, TestBedStatic } from '@angular/core/testing';

// Initialize the Angular testing environment

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture } from '@angular/core/testing';
import { ProductFacade } from '../../store/product.facade';
import { Details } from './details';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { signal } from '@angular/core';

describe('Details', () => {
  let component: Details;
  let fixture: ComponentFixture<Details>;
  let mockProductFacade: any;
  let mockActivatedRoute: any;

  const mockProduct = {
    id: '1',
    name: 'Test Product',
    description: 'This is a test product',
    price: 9.99,
  };

  beforeEach(async () => {
    mockProductFacade = {
      product: signal(mockProduct), // Mock the signal
      loadProduct: vi.fn(),
      getProduct: vi.fn().mockReturnValue(signal(mockProduct)), // Mock the getProduct method to return a signal
    };

    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: vi.fn().mockReturnValue('1'),
        },
      },
    };

    await TestBed.configureTestingModule({
      imports: [Details],
      providers: [
        { provide: ProductFacade, useValue: mockProductFacade },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Details);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // it('should display product details', () => {
  //   const nameElement = fixture.debugElement.query(By.css('.product-name')).nativeElement;
  //   const descriptionElement = fixture.debugElement.query(By.css('.product-description')).nativeElement;
  //   const priceElement = fixture.debugElement.query(By.css('.product-price')).nativeElement;

  //   expect(nameElement.textContent).toContain(mockProduct.name);
  //   expect(descriptionElement.textContent).toContain(mockProduct.description);
  //   expect(priceElement.textContent).toContain(mockProduct.price.toString());
  // });
});
