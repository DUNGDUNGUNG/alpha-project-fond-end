import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HouseComponent} from './house/house.component';
import {LoginHouseComponent} from './login-house/login-house.component';
import {AuthGuard} from '../_helpers/auth.guard';
import {NewHouseComponent} from './new-house/new-house.component';


const routes: Routes = [
  {path: '', component: HouseComponent},
  {path: 'login-house', component: LoginHouseComponent},
  {path: 'new-house', component: NewHouseComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesRoutingModule {
}
