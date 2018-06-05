import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignSearchComponent } from './sign-search/sign-search.component';

const routes: Routes = [
  { path: 'signSearch', component: SignSearchComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
