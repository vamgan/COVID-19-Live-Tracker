import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatestatsComponent } from './statestats.component';

describe('StatestatsComponent', () => {
  let component: StatestatsComponent;
  let fixture: ComponentFixture<StatestatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatestatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
