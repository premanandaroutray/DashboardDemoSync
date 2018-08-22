import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrilldowngridComponent } from './drilldowngrid.component';

describe('DrilldowngridComponent', () => {
  let component: DrilldowngridComponent;
  let fixture: ComponentFixture<DrilldowngridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrilldowngridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrilldowngridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
