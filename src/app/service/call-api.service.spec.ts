import { TestBed, inject } from '@angular/core/testing';

import { CallAPIService } from './call-api.service';

describe('CallAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallAPIService]
    });
  });

  it('should be created', inject([CallAPIService], (service: CallAPIService) => {
    expect(service).toBeTruthy();
  }));
});
