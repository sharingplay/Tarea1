import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProductoresComponent } from './actualizar-productores.component';

describe('ActualizarProductoresComponent', () => {
  let component: ActualizarProductoresComponent;
  let fixture: ComponentFixture<ActualizarProductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarProductoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarProductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
