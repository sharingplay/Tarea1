import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionAfiliacionesComponent } from './administracion-afiliaciones.component';

describe('AdministracionAfiliacionesComponent', () => {
  let component: AdministracionAfiliacionesComponent;
  let fixture: ComponentFixture<AdministracionAfiliacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionAfiliacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionAfiliacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
