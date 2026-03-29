import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorldwidebarComponent } from './worldwidebar.component';

describe('WorldwidebarComponent', () => {
  let component: WorldwidebarComponent;
  let fixture: ComponentFixture<WorldwidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldwidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldwidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
