import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionCuentaClienteComponent } from './creacion-cuenta-cliente.component';

describe('CreacionCuentaClienteComponent', () => {
  let component: CreacionCuentaClienteComponent;
  let fixture: ComponentFixture<CreacionCuentaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionCuentaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionCuentaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
