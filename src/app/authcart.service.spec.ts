import { TestBed } from '@angular/core/testing';

import { AuthcartService } from './authcart.service';

describe('AuthcartService', () => {
  let service: AuthcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
