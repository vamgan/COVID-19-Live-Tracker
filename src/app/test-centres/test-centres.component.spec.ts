import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCentresComponent } from './test-centres.component';

describe('TestCentresComponent', () => {
  let component: TestCentresComponent;
  let fixture: ComponentFixture<TestCentresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCentresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCentresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
