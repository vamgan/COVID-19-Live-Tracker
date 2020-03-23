import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderIndiaChartComponent } from './gender-india-chart.component';

describe('GenderIndiaChartComponent', () => {
  let component: GenderIndiaChartComponent;
  let fixture: ComponentFixture<GenderIndiaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderIndiaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderIndiaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
