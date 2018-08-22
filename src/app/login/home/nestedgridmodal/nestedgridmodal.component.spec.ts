import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedgridmodalComponent } from './nestedgridmodal.component';

describe('NestedgridmodalComponent', () => {
  let component: NestedgridmodalComponent;
  let fixture: ComponentFixture<NestedgridmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedgridmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedgridmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
