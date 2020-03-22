import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalityPieComponent } from './nationality-pie.component';

describe('NationalityPieComponent', () => {
  let component: NationalityPieComponent;
  let fixture: ComponentFixture<NationalityPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalityPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalityPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
