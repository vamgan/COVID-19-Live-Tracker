import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorldmapComponent } from './worldmap.component';

describe('WorldmapComponent', () => {
  let component: WorldmapComponent;
  let fixture: ComponentFixture<WorldmapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
