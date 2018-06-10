import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-total',
  templateUrl: './sign-up-total.component.html',
  styleUrls: ['./sign-up-total.component.css']
})
export class SignUpTotalComponent implements OnInit {
  total: number;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://www.thef2e.com/api/signUpTotal')
      .subscribe(arg => {
        this.total = arg.total;
      });
  }

}
