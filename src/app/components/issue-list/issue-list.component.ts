import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {GitHubAngularIssuesService} from '../../services/git-hub-angular-issues.service';
import {Issue} from '../../models/issue';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  issueSubscription: Subscription;
  issues: Issue[];

  totalPagesSubscription: Subscription;
  totalPages: number;

  pageSize = 10;
  pageRange: number[];
  currentPage = 1;
  currentIssue: Issue;
  modalRef: BsModalRef;

  statusMessage: string;

  constructor(
    private svc: GitHubAngularIssuesService,
    private modalService: BsModalService
  ) {
    this.issueSubscription = this.svc.issues$.subscribe(i => this.issues = i,
      (error: any) =>
        this.statusMessage = error.error.message); // might be nice to send better messages.
    this.totalPagesSubscription = this.svc.totalPages$.subscribe(t => {
      this.totalPages = t;
      this.makePageRange();
    },
      (error: any) =>
        this.statusMessage = error.error.message); // might be nice to send better messages.
  }

  ngOnInit() {
    this.getIssues();
  }

  getIssues(page: number = 1): void {
    this.statusMessage = null;
    this.currentPage = page;
    this.svc.getIssues(this.currentPage, this.pageSize);
  }

  showMarkup(issue: Issue, template: TemplateRef<any>) {
    this.currentIssue = issue;
    this.modalRef = this.modalService.show(template);
  }

  private makePageRange() {
    // There's a better way to do this...
    this.pageRange = [];
    let startPage = 1;
    let endPage = 10;
    if (this.totalPages > 10) {
      startPage = this.currentPage - 5;
      endPage = this.currentPage + 5;
    }
    if (startPage < 1) {
      startPage = 1;
    }
    if (endPage > this.totalPages) {
      endPage = this.totalPages;
    }

    for (let ii = startPage; ii <= endPage; ii++) {
      this.pageRange.push(ii);
    }
  }
}
