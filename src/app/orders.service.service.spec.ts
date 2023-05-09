import { TestBed } from '@angular/core/testing';

import { OrdersServiceService } from './servicios/orders.service.service';

describe('OrdersServiceService', () => {
  let service: OrdersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
