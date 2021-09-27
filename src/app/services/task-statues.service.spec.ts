import { TestBed } from '@angular/core/testing';

import { TaskStatuesService } from './task-statues.service';

describe('TaskStatuesService', () => {
  let service: TaskStatuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskStatuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
