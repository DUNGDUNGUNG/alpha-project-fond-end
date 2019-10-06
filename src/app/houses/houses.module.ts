import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HouseComponent } from './house/house.component';
import { LoginHouseComponent } from './login-house/login-house.component';
import { NewHouseComponent } from './new-house/new-house.component';


@NgModule({
  declarations: [HouseComponent, LoginHouseComponent, NewHouseComponent],
  imports: [
    CommonModule,
    HousesRoutingModule
  ]
})
export class HousesModule { }
