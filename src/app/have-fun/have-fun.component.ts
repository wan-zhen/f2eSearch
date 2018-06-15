import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-have-fun',
  templateUrl: './have-fun.component.html',
  styleUrls: ['./have-fun.component.css']
})
export class HaveFunComponent implements OnInit {
  recordsData: IRecordArray[];
  zoneData: string[] = [];
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  constructor(
    private http: HttpClient,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    const params = { q: '', limit: 15 };
    const api = `https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97`;
    this.http.get<IApi>(api).subscribe(arg => {
      console.log(arg.result.records);
      this.recordsData = arg.result.records;
      this.recordsData.forEach(v => {
        this.zoneData.push(v.Zone);
        if (v.Ticketinfo === '' || v.Ticketinfo === '免費參觀') {
          v.free = true;
        }
        if (v.Opentime === '全天候開放') {
          v.allOpen = true;
        }
      });
      this.zoneData = this.zoneData.filter((v, i, arr) => arr.indexOf(v) === i);
      console.log(this.zoneData);
    });
  }
}

interface IApi {
  result: IRecords;
}

interface IRecords {
  records: IRecordArray[];
}

interface IRecordArray {
  Add: string;
  Changetime: string;
  Description: string;
  Name: string;
  Opentime: string;
  Picture1: string;
  Tel: string;
  Ticketinfo: string;
  Zone: string;
  free?: boolean;
  allOpen?: boolean;
}
