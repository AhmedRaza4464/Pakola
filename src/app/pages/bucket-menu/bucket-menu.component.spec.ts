import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketMenuComponent } from './bucket-menu.component';

describe('BucketMenuComponent', () => {
  let component: BucketMenuComponent;
  let fixture: ComponentFixture<BucketMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BucketMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucketMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
