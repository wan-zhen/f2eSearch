import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { NgModel } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map, debounceTime, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-have-fun-nav',
  templateUrl: './have-fun-nav.component.html',
  styleUrls: ['./have-fun-nav.component.css']
})
export class HaveFunNavComponent implements OnInit, AfterViewInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  recordsData: IRecordArray[];
  recordsLength: number;
  zoneData: string[] = [];
  data$: Observable<any>;
  sourceData: IRecordArray[] = [];
  zone = '';
  @ViewChild('tZone') tZone: NgModel;

  keyword = '';
  @ViewChild('tKeyword') tKeyword: NgModel;

  free = false;
  @ViewChild('tFree') tFree: NgModel;

  open = false;
  @ViewChild('tOpen') tOpen: NgModel;

  constructor(private breakpointObserver: BreakpointObserver
    , private http: HttpClient) { }

  ngOnInit() {
    const api = `https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97`;
    this.http.get<IApi>(api).subscribe(arg => {
      this.recordsData = arg.result.records;
      this.recordsData.forEach(v => {
        this.zoneData.push(v.Zone);
        if (v.Ticketinfo === '' || v.Ticketinfo === '免費參觀') {
          v.free = true;
        } else {
          v.free = false;
        }
        if (v.Opentime === '全天候開放') {
          v.allOpen = true;
        } else {
          v.allOpen = false;
        }
      });
      this.zoneData = this.zoneData.filter((v, i, arr) => arr.indexOf(v) === i);
      this.sourceData = Object.assign(this.recordsData);
      this.recordsLength = this.recordsData.length;
    });
  }

  rxListener() {
    this.data$ = combineLatest(
      this.tKeyword.valueChanges,
      this.tZone.valueChanges,
      this.tFree.valueChanges,
      this.tOpen.valueChanges
    ).pipe(
      debounceTime(500)
    );

    this.data$.subscribe(arg => {
      if (this.recordsData) {
        this.recordsData = this.sourceData.filter(v => {
          return v.free === arg[2]
          && v.allOpen === arg[3];
          // v.Name.indexOf(arg[0]) > 0
          // v.Zone === arg[1]
        });
        this.recordsLength = this.recordsData.length;
      }
    });
  }

  ngAfterViewInit() {
    this.rxListener();
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
