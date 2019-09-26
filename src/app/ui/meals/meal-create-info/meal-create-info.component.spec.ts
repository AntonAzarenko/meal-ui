import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCreateInfoComponent } from './meal-create-info.component';

describe('MealCreateInfoComponent', () => {
  let component: MealCreateInfoComponent;
  let fixture: ComponentFixture<MealCreateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealCreateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealCreateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
