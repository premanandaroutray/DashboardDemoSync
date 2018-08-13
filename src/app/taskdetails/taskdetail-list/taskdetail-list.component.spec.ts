import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdetailListComponent } from './taskdetail-list.component';

describe('TaskdetailListComponent', () => {
  let component: TaskdetailListComponent;
  let fixture: ComponentFixture<TaskdetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskdetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskdetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
