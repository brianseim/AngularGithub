import {User} from './user';
import {Milestone} from './milestone';
import {Label} from './label';
import {PullRequest} from './pull-request';

export class Issue {
  public url: string;
  public repository_url: string;
  public labels_url: string;
  public comments_url: string;
  public events_url: string;
  public html_url: string;
  public id: number;
  public number: number;
  public title: string;
  public user: User;
  public labels: Label[];
  public state: string;
  public locked: boolean;
  public assignee: User;
  public assignees: User[];
  public milestone: Milestone;
  public comments: number;
  public created_at: Date;
  public updated_at: Date;
  public closed_at: Date;
  public author_association: string;
  public pull_request: PullRequest;
  public body: string;
}
