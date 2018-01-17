import { TestBed, inject } from '@angular/core/testing';

import { GitHubAngularIssuesService } from './git-hub-angular-issues.service';

describe('GitHubAngularIssuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubAngularIssuesService]
    });
  });

  it('should be created', inject([GitHubAngularIssuesService], (service: GitHubAngularIssuesService) => {
    expect(service).toBeTruthy();
  }));
});
