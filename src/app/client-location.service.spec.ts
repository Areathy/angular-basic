import { TestBed } from '@angular/core/testing';

import { ClientLocationsService } from './client-locations.service';

describe('ClientLocationService', () => {
  let service: ClientLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
