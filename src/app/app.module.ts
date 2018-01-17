import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';

import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { ExcerptPipe } from './pipes/excerpt.pipe';

import { GitHubAngularIssuesService } from './services/git-hub-angular-issues.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule, ModalModule, PopoverModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';


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
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [GitHubAngularIssuesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
