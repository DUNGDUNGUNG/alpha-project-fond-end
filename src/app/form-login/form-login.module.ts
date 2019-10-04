import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormLoginRoutingModule } from './form-login-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { ProfileComponent } from './profile/profile.component';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, AlertComponent, ProfileComponent],
  exports: [
    AlertComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormLoginRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule
  ]
})
export class FormLoginModule { }
