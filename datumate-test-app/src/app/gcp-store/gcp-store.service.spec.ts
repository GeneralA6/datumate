import { TestBed } from '@angular/core/testing';

import { GcpStoreService } from './gcp-store.service';

describe('GcpStoreService', () => {
  let service: GcpStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcpStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
