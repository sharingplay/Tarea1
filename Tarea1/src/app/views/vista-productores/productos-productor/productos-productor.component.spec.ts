import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosProductorComponent } from './productos-productor.component';

describe('ProductosProductorComponent', () => {
  let component: ProductosProductorComponent;
  let fixture: ComponentFixture<ProductosProductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosProductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosProductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
