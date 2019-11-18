import { TestBed } from '@angular/core/testing';

import { RevenueDashboardService } from './revenue-dashboard.service';

describe('RevenueDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RevenueDashboardService = TestBed.get(RevenueDashboardService);
    expect(service).toBeTruthy();
  });
});
