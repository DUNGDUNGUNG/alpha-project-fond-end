import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {NgbCollapseModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [NavBarComponent],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    NgbDropdownModule
  ]
})
export class SharedModule { }
