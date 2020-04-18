import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatestatsComponent } from './statestats.component';

describe('StatestatsComponent', () => {
  let component: StatestatsComponent;
  let fixture: ComponentFixture<StatestatsComponent>;

  beforeEach(async(() => {
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
