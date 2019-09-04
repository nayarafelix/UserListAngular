import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent, ListComponent } from './components/index'

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'user/new', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
