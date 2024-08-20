import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurasolComponent } from './curasol.component';

describe('CurasolComponent', () => {
  let component: CurasolComponent;
  let fixture: ComponentFixture<CurasolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurasolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurasolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
