import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliationInfoModalComponent } from './afiliation-info-modal.component';

describe('AfiliationInfoModalComponent', () => {
  let component: AfiliationInfoModalComponent;
  let fixture: ComponentFixture<AfiliationInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfiliationInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfiliationInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
