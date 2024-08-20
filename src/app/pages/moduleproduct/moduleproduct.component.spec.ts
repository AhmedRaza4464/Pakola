import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleproductComponent } from './moduleproduct.component';

describe('ModuleproductComponent', () => {
  let component: ModuleproductComponent;
  let fixture: ComponentFixture<ModuleproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
