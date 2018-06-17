import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatCheckboxModule, MatChipsModule,
  MatCardModule, MatSelectModule, MatPaginatorModule
} from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { SignSearchComponent } from './sign-search/sign-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SortPipe } from './ng-pipe/sort.pipe';
import { SignUpTotalComponent } from './sign-up-total/sign-up-total.component';
import { HaveFunNavComponent } from './have-fun-nav/have-fun-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignSearchComponent,
    TodoListComponent,
    SortPipe,
    SignUpTotalComponent,
    HaveFunNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCardModule,
    MatSelectModule,
    MatPaginatorModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
