import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Firebase service + environment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './firebase/dashboard/dashboard.component';
import { SignInComponent } from './firebase/sign-in/sign-in.component';
import { SignUpComponent } from './firebase/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './firebase/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './firebase/verify-email/verify-email.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
