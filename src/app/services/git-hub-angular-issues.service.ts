import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Issue} from '../models/issue';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GitHubAngularIssuesService {
  repoUrl = 'https://api.github.com/repos/angular/angular/issues?since=';

  constructor(
    private http: HttpClient
  ) { }

  getIssues(): Observable<Issue[]> {
    const date = new Date();
    const sevenDaysAgo = new Date(date.getTime() - (7 * 24 * 60 * 60 * 1000));
    return this.http.get<Issue[]>(this.repoUrl + sevenDaysAgo.toISOString());
  }
}
