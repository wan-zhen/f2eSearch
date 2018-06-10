import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignSearchComponent } from './sign-search/sign-search.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: 'signSearch', component: SignSearchComponent },
  { path: 'todoList', component: TodoListComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })]
})

export class AppRoutingModule { }
