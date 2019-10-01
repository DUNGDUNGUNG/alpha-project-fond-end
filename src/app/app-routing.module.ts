import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(mod => mod.SharedModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./form-login/form-login.module').then(mod => mod.FormLoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
