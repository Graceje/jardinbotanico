import { TestBed, inject } from '@angular/core/testing';

import { VisitasUService } from './visitas-u.service';

describe('VisitasUService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitasUService]
    });
  });

  it('should be created', inject([VisitasUService], (service: VisitasUService) => {
    expect(service).toBeTruthy();
  }));
});
