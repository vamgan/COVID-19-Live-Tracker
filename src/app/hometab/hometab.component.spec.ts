import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HometabComponent } from './hometab.component';

describe('HometabComponent', () => {
  let component: HometabComponent;
  let fixture: ComponentFixture<HometabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HometabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
