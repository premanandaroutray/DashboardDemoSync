import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrilldownGridEasyUIComponent } from './drilldown-grid-easy-ui.component';

describe('DrilldownGridEasyUIComponent', () => {
  let component: DrilldownGridEasyUIComponent;
  let fixture: ComponentFixture<DrilldownGridEasyUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrilldownGridEasyUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrilldownGridEasyUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
