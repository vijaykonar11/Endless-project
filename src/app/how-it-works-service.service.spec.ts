import { TestBed } from '@angular/core/testing';

import { HowItWorksServiceService } from './how-it-works-service.service';

describe('HowItWorksServiceService', () => {
  let service: HowItWorksServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HowItWorksServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
