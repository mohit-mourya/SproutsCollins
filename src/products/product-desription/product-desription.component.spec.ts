import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDesriptionComponent } from './product-desription.component';

describe('ProductDesriptionComponent', () => {
  let component: ProductDesriptionComponent;
  let fixture: ComponentFixture<ProductDesriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDesriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDesriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
