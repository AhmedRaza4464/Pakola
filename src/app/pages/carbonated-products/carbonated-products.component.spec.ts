import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonatedProductsComponent } from './carbonated-products.component';

describe('CarbonatedProductsComponent', () => {
  let component: CarbonatedProductsComponent;
  let fixture: ComponentFixture<CarbonatedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarbonatedProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonatedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
