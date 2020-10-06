import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredButtonComponent } from './centered-button.component';

describe('CenteredButtonComponent', () => {
  let component: CenteredButtonComponent;
  let fixture: ComponentFixture<CenteredButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenteredButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteredButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
