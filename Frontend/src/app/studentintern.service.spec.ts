import { TestBed } from '@angular/core/testing';

import { StudentinternService } from './studentintern.service';

describe('StudentinternService', () => {
  let service: StudentinternService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentinternService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
