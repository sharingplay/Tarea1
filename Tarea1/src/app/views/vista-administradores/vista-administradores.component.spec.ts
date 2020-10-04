import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAdministradoresComponent } from './vista-administradores.component';

describe('VistaAdministradoresComponent', () => {
  let component: VistaAdministradoresComponent;
  let fixture: ComponentFixture<VistaAdministradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAdministradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
