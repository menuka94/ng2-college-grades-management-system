import { TestBed, inject } from '@angular/core/testing';

import { ReviewersService } from './reviewers.service';

describe('ReviewersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewersService]
    });
  });

  it('should ...', inject([ReviewersService], (service: ReviewersService) => {
    expect(service).toBeTruthy();
  }));
});
