import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MumbaihComponent } from './mumbaih.component';

describe('MumbaihComponent', () => {
  let component: MumbaihComponent;
  let fixture: ComponentFixture<MumbaihComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MumbaihComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MumbaihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
