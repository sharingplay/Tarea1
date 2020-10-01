import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProductoresComponent } from './gestion-productores.component';

describe('GestionProductoresComponent', () => {
  let component: GestionProductoresComponent;
  let fixture: ComponentFixture<GestionProductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProductoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
