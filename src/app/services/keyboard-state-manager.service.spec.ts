import { TestBed, inject } from '@angular/core/testing';

import { KeyboardStateManagerService } from './keyboard-state-manager.service';

describe('KeyboardStateManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyboardStateManagerService]
    });
  });

  it('should be created', inject([KeyboardStateManagerService], (service: KeyboardStateManagerService) => {
    expect(service).toBeTruthy();
  }));
});
