import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {IssueListComponent} from './components/issue-list/issue-list.component';
import {ExcerptPipe} from './pipes/excerpt.pipe';
import {MarkdownToHtmlPipe} from 'markdown-to-html-pipe';
import {AlertModule, BsModalService, ComponentLoaderFactory, PositioningService} from 'ngx-bootstrap';
import {GitHubAngularIssuesService} from './services/git-hub-angular-issues.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
      FormsModule,
      AlertModule.forRoot()],
      declarations: [
        AppComponent,
        IssueListComponent,
        ExcerptPipe,
        MarkdownToHtmlPipe
      ],
      providers: [GitHubAngularIssuesService,
        BsModalService,
        ComponentLoaderFactory,
        PositioningService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'AI (Angular Issues)'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AI (Angular Issues)');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to AI (Angular Issues)!');
  }));
});
