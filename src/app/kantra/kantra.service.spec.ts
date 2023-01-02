import { TestBed } from '@angular/core/testing';

import { KantraService } from './kantra.service';

describe('KantraService', () => {
  let service: KantraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KantraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
