import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-search',
  templateUrl: './sign-search.component.html',
  styleUrls: ['./sign-search.component.css']
})
export class SignSearchComponent implements OnInit {
  result = '';

  constructor(private http: HttpClient) { }
  ngOnInit() {
  }

  submit(mailValue) {
    console.log(mailValue);
    this.http.post<any>('https://www.thef2e.com/api/isSignUp', { email: mailValue })
      .subscribe(result => {
        if (result.success === true) {
          this.result = `${result.nickName}${result.message}`;
        } else {
          this.result = `${result.message}`;
        }
        console.log(result);
      });
  }
}
