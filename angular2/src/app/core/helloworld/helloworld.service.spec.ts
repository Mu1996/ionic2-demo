import { TestBed, inject } from '@angular/core/testing';

import { HelloworldService } from './helloworld.service';

describe('HelloworldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelloworldService]
    });
  });

  it('should ...', inject([HelloworldService], (service: HelloworldService) => {
    expect(service).toBeTruthy();
  }));
});
