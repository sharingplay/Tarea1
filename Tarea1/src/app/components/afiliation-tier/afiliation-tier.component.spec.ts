import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliationTierComponent } from './afiliation-tier.component';

describe('AfiliationTierComponent', () => {
  let component: AfiliationTierComponent;
  let fixture: ComponentFixture<AfiliationTierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfiliationTierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfiliationTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
