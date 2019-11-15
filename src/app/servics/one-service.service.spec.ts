import { TestBed } from '@angular/core/testing';

import { OneServiceService } from './one-service.service';

describe('OneServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OneServiceService = TestBed.get(OneServiceService);
    expect(service).toBeTruthy();
  });
});
