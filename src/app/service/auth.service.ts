import {Injectable} from '@angular/core';
import {auth} from 'firebase/app';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    public afAuth: AngularFireAuth// Inject Firebase auth service
  ) {
  }

  // Sign in with Google
  loginWithGoogle() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Sign in with Facebook
  loginWithFacebook() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  loginWithTwitter() {
    return this.AuthLogin(new auth.TwitterAuthProvider());
  }

  loginWithGitHub() {
    return this.AuthLogin(new auth.GithubAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      }).catch((error) => {
        console.log(error);
      });
  }

  logout() {
    localStorage.clear();
    return this.afAuth.auth.signOut();
  }
}
