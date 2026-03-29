import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DailyindComponent } from './dailyind.component';

describe('DailyindComponent', () => {
  let component: DailyindComponent;
  let fixture: ComponentFixture<DailyindComponent>;

  beforeEach(waitForAsync(() => {
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
