import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailytaskReportComponent } from './dailytask-report.component';

describe('DailytaskReportComponent', () => {
  let component: DailytaskReportComponent;
  let fixture: ComponentFixture<DailytaskReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailytaskReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailytaskReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
