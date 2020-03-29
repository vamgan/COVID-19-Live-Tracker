import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunzoneComponent } from './funzone.component';

describe('FunzoneComponent', () => {
  let component: FunzoneComponent;
  let fixture: ComponentFixture<FunzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
