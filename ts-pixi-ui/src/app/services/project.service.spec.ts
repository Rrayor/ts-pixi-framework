import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';

describe('GameService', () => {
    let service: ProjectService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProjectService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
