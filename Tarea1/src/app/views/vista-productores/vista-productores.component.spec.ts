import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaProductoresComponent } from './vista-productores.component';

describe('VistaProductoresComponent', () => {
  let component: VistaProductoresComponent;
  let fixture: ComponentFixture<VistaProductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaProductoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaProductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
