import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdetailListComponent } from './projectdetail-list.component';

describe('ProjectdetailListComponent', () => {
  let component: ProjectdetailListComponent;
  let fixture: ComponentFixture<ProjectdetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
