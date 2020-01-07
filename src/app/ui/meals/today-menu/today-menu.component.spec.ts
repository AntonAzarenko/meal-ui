import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayMenuComponent } from './today-menu.component';

describe('TodayMenuComponent', () => {
  let component: TodayMenuComponent;
  let fixture: ComponentFixture<TodayMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
