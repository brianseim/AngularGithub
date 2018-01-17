import {Component, OnInit, TemplateRef} from '@angular/core';
import {Issue} from './models/issue';
import {GitHubAngularIssuesService} from './services/git-hub-angular-issues.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AI (Angular Issues)';
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
