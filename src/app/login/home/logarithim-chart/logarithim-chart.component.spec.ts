import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogarithimChartComponent } from './logarithim-chart.component';

describe('LogarithimChartComponent', () => {
  let component: LogarithimChartComponent;
  let fixture: ComponentFixture<LogarithimChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogarithimChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogarithimChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
