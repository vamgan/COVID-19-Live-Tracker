import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsTickerComponent } from './news-ticker.component';

describe('NewsTickerComponent', () => {
  let component: NewsTickerComponent;
  let fixture: ComponentFixture<NewsTickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
