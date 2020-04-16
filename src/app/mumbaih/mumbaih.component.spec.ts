import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MumbaihComponent } from './mumbaih.component';

describe('MumbaihComponent', () => {
  let component: MumbaihComponent;
  let fixture: ComponentFixture<MumbaihComponent>;

  beforeEach(async(() => {
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
