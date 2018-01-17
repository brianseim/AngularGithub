import { TestBed, inject } from '@angular/core/testing';

import { GitHubAngularIssuesService } from './git-hub-angular-issues.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('GitHubAngularIssuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GitHubAngularIssuesService,
      HttpClient]
    });
  });

  afterEach(inject([HttpTestingController],
    (httpMock: HttpTestingController) => {
      httpMock.verify();
    }));

  it('should be created', inject([GitHubAngularIssuesService], (service: GitHubAngularIssuesService) => {
    expect(service).toBeTruthy();
  }));
});
