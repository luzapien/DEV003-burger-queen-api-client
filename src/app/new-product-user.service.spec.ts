import { TestBed } from '@angular/core/testing';

import { NewProductUserService } from './new-product-user.service';

describe('NewProductUserService', () => {
  let service: NewProductUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewProductUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
