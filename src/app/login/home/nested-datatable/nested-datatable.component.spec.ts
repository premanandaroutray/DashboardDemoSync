import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedDatatableComponent } from './nested-datatable.component';

describe('NestedDatatableComponent', () => {
  let component: NestedDatatableComponent;
  let fixture: ComponentFixture<NestedDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
