import { TestBed } from '@angular/core/testing';

import { DetailedTodoService } from './detailed-todo.service';

describe('DetailedTodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailedTodoService = TestBed.get(DetailedTodoService);
    expect(service).toBeTruthy();
  });
});
