import { TestBed } from '@angular/core/testing';

import { MainViewService } from './main-view.service';

describe('MainViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainViewService = TestBed.get(MainViewService);
    expect(service).toBeTruthy();
  });
});
