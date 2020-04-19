import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatemapComponent } from './statemap.component';

describe('StatemapComponent', () => {
  let component: StatemapComponent;
  let fixture: ComponentFixture<StatemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
