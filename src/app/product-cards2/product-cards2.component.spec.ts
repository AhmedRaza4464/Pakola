import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCards2Component } from './product-cards2.component';

describe('ProductCards2Component', () => {
  let component: ProductCards2Component;
  let fixture: ComponentFixture<ProductCards2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCards2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCards2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
