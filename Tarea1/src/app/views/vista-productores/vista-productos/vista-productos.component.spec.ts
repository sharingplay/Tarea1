import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaProductosComponent } from './vista-productos.component';

describe('VistaProductosComponent', () => {
  let component: VistaProductosComponent;
  let fixture: ComponentFixture<VistaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
