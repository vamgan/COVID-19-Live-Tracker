import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldwidebarComponent } from './worldwidebar.component';

describe('WorldwidebarComponent', () => {
  let component: WorldwidebarComponent;
  let fixture: ComponentFixture<WorldwidebarComponent>;

  beforeEach(async(() => {
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
