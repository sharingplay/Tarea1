import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPerProducerComponent } from './products-per-producer.component';

describe('ProductsPerProducerComponent', () => {
  let component: ProductsPerProducerComponent;
  let fixture: ComponentFixture<ProductsPerProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPerProducerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPerProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
