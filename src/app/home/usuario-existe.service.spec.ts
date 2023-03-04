import { TestBed } from '@angular/core/testing';

import { NovoUsuarioExisteService } from './usuario-existe.service';

describe('NovoUsuarioExisteService', () => {
  let service: NovoUsuarioExisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoUsuarioExisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
