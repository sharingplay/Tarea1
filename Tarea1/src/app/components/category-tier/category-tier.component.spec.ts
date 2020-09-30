import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTierComponent } from './category-tier.component';

describe('CategoryTierComponent', () => {
  let component: CategoryTierComponent;
  let fixture: ComponentFixture<CategoryTierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
