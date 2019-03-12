import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {LoginComponent} from './login/login.component';
import {ApplicantComponent} from './applicant/applicant.component';

const routes: Routes = [
  { path: 'dashboard' , component: NavComponent },
  { path: '' , component: LoginComponent },
  { path: 'applicant/:id', component: ApplicantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
