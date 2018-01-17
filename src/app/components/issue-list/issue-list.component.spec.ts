import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueListComponent } from './issue-list.component';
import {GitHubAngularIssuesService} from '../../services/git-hub-angular-issues.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AlertModule, BsModalService, ComponentLoaderFactory, PositioningService} from 'ngx-bootstrap';
import {ExcerptPipe} from '../../pipes/excerpt.pipe';
import {MarkdownToHtmlPipe} from 'markdown-to-html-pipe';
import {FormsModule} from '@angular/forms';

describe('IssueListComponent', () => {
  let component: IssueListComponent;
  let fixture: ComponentFixture<IssueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
      FormsModule,
      AlertModule.forRoot()],
      declarations: [ IssueListComponent,
        ExcerptPipe,
        MarkdownToHtmlPipe
      ],
      providers: [GitHubAngularIssuesService,
        BsModalService,
        ComponentLoaderFactory,
        PositioningService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
