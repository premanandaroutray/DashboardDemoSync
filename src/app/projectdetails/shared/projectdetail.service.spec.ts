import { TestBed, inject } from '@angular/core/testing';

import { ProjectdetailService } from './projectdetail.service';

describe('UserdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectdetailService]
    });
  });

  it('should be created', inject([ProjectdetailService], (service: ProjectdetailService) => {
    expect(service).toBeTruthy();
  }));
});
