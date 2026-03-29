import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestedchartComponent } from './testedchart.component';

describe('TestedchartComponent', () => {
  let component: TestedchartComponent;
  let fixture: ComponentFixture<TestedchartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestedchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestedchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
