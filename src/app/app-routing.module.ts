import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignSearchComponent } from './sign-search/sign-search.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SignUpTotalComponent } from './sign-up-total/sign-up-total.component';
import { HaveFunNavComponent } from './have-fun-nav/have-fun-nav.component';

const routes: Routes = [
  { path: '', component: SignUpTotalComponent },
  { path: 'signSearch', component: SignSearchComponent },
  { path: 'todoList', component: TodoListComponent },
  { path: 'haveFun', component: HaveFunNavComponent, outlet: 'along' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })]
})

export class AppRoutingModule { }
