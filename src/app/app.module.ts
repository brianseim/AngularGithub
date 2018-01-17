import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GitHubAngularIssuesService } from './services/git-hub-angular-issues.service';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { ExcerptPipe } from './pipes/excerpt.pipe';
import { ModalModule } from 'ngx-bootstrap';
import { IssueListComponent } from './components/issue-list/issue-list.component';
// import {AlertModule} from 'ngx-bootstrap';
// https://www.npmjs.com/package/ngx-bootstrap

@NgModule({
  declarations: [
    AppComponent,
    ExcerptPipe,
    IssueListComponent
  ],
  imports: [
    // AlertModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    MarkdownToHtmlModule,
    ModalModule.forRoot()
  ],
  providers: [GitHubAngularIssuesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
