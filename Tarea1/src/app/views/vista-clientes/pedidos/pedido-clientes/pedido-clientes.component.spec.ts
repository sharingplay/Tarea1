import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoClientesComponent } from './pedido-clientes.component';

describe('PedidoClientesComponent', () => {
  let component: PedidoClientesComponent;
  let fixture: ComponentFixture<PedidoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
