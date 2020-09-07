import { TestBed } from '@angular/core/testing';

import { MovementStatusService } from './movement-status.service';

describe('MovementStatusService', () => {
  let service: MovementStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovementStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
