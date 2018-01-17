import {User} from './user';

export class Milestone {
  public url: string;
  public html_url: string;
  public labels_url: string;
  public id: number;
  public number: number;
  public title: string;
  public description: string;
  public creator: User;
  public open_issues: number;
  public closed_issues: number;
  public state: string;
  public created_at: Date;
  public updated_at: Date;
  public due_on: Date;
  public closed_at: Date;
}
