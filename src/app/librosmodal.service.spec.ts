import { TestBed } from '@angular/core/testing';

import { LibrosmodalService } from './librosmodal.service';

describe('LibrosmodalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrosmodalService = TestBed.get(LibrosmodalService);
    expect(service).toBeTruthy();
  });
});
