import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiddleComponent } from './riddle.component';

describe('RiddleComponent', () => {
  let component: RiddleComponent;
  let fixture: ComponentFixture<RiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
