import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormLoginModule} from './form-login/form-login.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {fakeBackendProvider} from './_helpers/fake-backend';
import {HomeComponent} from './home/home.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule, StorageBucket} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HousesModule} from './houses/houses.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HousesModule,
    FormLoginModule,
    NgbDropdownModule,
    AngularFireModule.initializeApp(environment.firebase, 'alpha-project-fond-end'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: StorageBucket, useValue: 'gs://alpha-project-fond-end.appspot.com'},
    AngularFirestore,
    // provider used to create fake backend
    fakeBackendProvider
  ],


  bootstrap: [AppComponent]
})
export class AppModule {
}
