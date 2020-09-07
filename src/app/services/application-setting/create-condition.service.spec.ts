import { TestBed } from '@angular/core/testing';

import { CreateConditionService } from './create-condition.service';

describe('CreateConditionService', () => {
  let service: CreateConditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateConditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
