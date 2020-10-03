import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProductorComponent } from './header-productor.component';

describe('HeaderProductorComponent', () => {
  let component: HeaderProductorComponent;
  let fixture: ComponentFixture<HeaderProductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderProductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
