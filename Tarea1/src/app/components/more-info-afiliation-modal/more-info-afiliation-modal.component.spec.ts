import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoAfiliationModalComponent } from './more-info-afiliation-modal.component';

describe('MoreInfoAfiliationModalComponent', () => {
  let component: MoreInfoAfiliationModalComponent;
  let fixture: ComponentFixture<MoreInfoAfiliationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInfoAfiliationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfoAfiliationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
