import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-search',
  templateUrl: './sign-search.component.html',
  styleUrls: ['./sign-search.component.css']
})
export class SignSearchComponent implements OnInit {
  result = '';
  mailValue = '';
  progress = false;
  stageValue = '';
  stageProgress = false;
  stageResult: IStage[];
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }

  submit() {
    this.progress = true;
    this.http.post<any>('https://www.thef2e.com/api/isSignUp', { email: this.mailValue })
      .subscribe(result => {
        this.progress = false;
        if (result.success === true) {
          this.result = `${result.nickName}${result.message}`;
        } else {
          this.result = `${result.message}`;
        }
      });
  }

  submitStage() {
    this.stageProgress = true;
    this.http.post<IStage[]>('https://www.thef2e.com/api/stageCheck', { email: this.stageValue })
      .subscribe(result => {
        this.stageProgress = false;
        this.stageResult = result;
        this.stageResult.forEach(i => i.tagItem = i.tag.split(','));
      });
  }
}

interface IStage {
  mail?: string;
  stage: number;
  tag: string;
  timeStamp: number;
  url: string;
  tagItem?: string[];
}
