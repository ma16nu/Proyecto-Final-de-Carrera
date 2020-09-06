import { TestBed } from '@angular/core/testing';

import { HistorialpacienteService } from './historialpaciente.service';

describe('HistorialpacienteService', () => {
  let service: HistorialpacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialpacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
