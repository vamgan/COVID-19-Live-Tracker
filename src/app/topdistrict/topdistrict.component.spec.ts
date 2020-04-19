import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdistrictComponent } from './topdistrict.component';

describe('TopdistrictComponent', () => {
  let component: TopdistrictComponent;
  let fixture: ComponentFixture<TopdistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopdistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopdistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
