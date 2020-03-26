import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyindComponent } from './dailyind.component';

describe('DailyindComponent', () => {
  let component: DailyindComponent;
  let fixture: ComponentFixture<DailyindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
