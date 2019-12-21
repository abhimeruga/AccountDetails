import { TestBed } from '@angular/core/testing';

import { BankaccountdetailsService } from './bankaccountdetails.service';

describe('BankaccountdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankaccountdetailsService = TestBed.get(BankaccountdetailsService);
    expect(service).toBeTruthy();
  });
});
