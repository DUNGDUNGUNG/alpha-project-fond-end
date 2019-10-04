import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './_helpers/auth.guard';


const routes: Routes = [
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(mod => mod.SharedModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./form-login/form-login.module').then(mod => mod.FormLoginModule)
  },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
