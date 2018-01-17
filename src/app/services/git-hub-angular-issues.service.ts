import {Injectable} from '@angular/core';
import {Issue} from '../models/issue';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {isNumeric} from 'rxjs/util/isNumeric';

@Injectable()
export class GitHubAngularIssuesService {
  repoUrl = 'https://api.github.com/repos/angular/angular/issues?since=';
  sevenDaysAgo: Date;
  // private _currentPage = new Subject<number>();
  // currentPage$ = this._currentPage.asObservable();

  private _totalPages = new Subject<number>();
  totalPages$ = this._totalPages.asObservable();

  private _issues = new Subject<Issue[]>();
  issues$ = this._issues.asObservable();

  constructor(private http: HttpClient) {
  }

  getIssues(page = 1, pageSize = 10): void {
    // this._currentPage.next(page);
    const date = new Date();
    this.sevenDaysAgo = new Date(date.getTime() - (7 * 24 * 60 * 60 * 1000));
    // this.checkPages();
    this.http.get<Issue[]>(this.repoUrl + this.sevenDaysAgo.toISOString() + '&per_page=' + pageSize + '&page=' + page,
      {observe: 'response'})
      .subscribe(r => {
        // Sample Data for header 'link':
        // <https://api.github.com/resource?page=2>; rel="next", <https://api.github.com/resource?page=5>; rel="last"
        const linkData = r.headers.get('link').split(';');
        if (linkData.length === 3) {
          const pattern = /page=([0-9]+)/;
          const pps = pattern.exec(linkData[1]);
          if (pps.length === 2 && isNumeric(pps[1])) {
            this._totalPages.next(Number(pps[1]));
          }
        }
        this._issues.next(r.body);
      },
        (error: any) =>
          this.handleError(error)
      );
  }

  handleError(error: Response) {
    console.error(error);
    this._issues.error(error);
  }
}
