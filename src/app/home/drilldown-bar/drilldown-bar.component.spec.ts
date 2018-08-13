import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrilldownBarComponent } from './drilldown-bar.component';

describe('DrilldownBarComponent', () => {
  let component: DrilldownBarComponent;
  let fixture: ComponentFixture<DrilldownBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrilldownBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrilldownBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
