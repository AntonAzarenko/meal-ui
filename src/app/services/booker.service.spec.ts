import { TestBed } from '@angular/core/testing';

import { BookerService } from './booker.service';

describe('BookerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookerService = TestBed.get(BookerService);
    expect(service).toBeTruthy();
  });
});
