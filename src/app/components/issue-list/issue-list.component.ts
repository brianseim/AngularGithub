import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {GitHubAngularIssuesService} from '../../services/git-hub-angular-issues.service';
import {Issue} from '../../models/issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[];

  currentIssue: Issue;
  modalRef: BsModalRef;

  constructor(
    private svc: GitHubAngularIssuesService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.getIssues();
  }

  getIssues(): void {
    this.svc.getIssues()
      .subscribe(issues => this.issues = issues);
  }

  showMarkup(issue: Issue, template: TemplateRef<any>) {
    this.currentIssue = issue;
    this.modalRef = this.modalService.show(template);
  }
}
