import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionDatosClienteComponent } from './actualizacion-datos-cliente.component';

describe('ActualizacionDatosClienteComponent', () => {
  let component: ActualizacionDatosClienteComponent;
  let fixture: ComponentFixture<ActualizacionDatosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizacionDatosClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizacionDatosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
