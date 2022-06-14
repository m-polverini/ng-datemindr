import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  GoogleAuthProvider,
  getAuth,
  Auth,
  OAuthCredential,
  onAuthStateChanged,
  User,
  signOut,
  signInWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Login } from '../models/login/login';
import { Provider } from '../models/login/provider';
import { TypeToast } from '../models/toast/type-toast';
import { FirebaseService } from './firebase.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  googleProvider: GoogleAuthProvider;
  auth: Auth;
  currentUser: User | null = null;
  constructor(private _router: Router, private _toastService: ToastService) {
    this.googleProvider = new GoogleAuthProvider();
    this.auth = getAuth();
    this.auth.useDeviceLanguage();
    this.isAuthenticated();
    this.caughtRedirect();
  }

  caughtRedirect() {
    getRedirectResult(this.auth)
      .then((result) => {
        if (result) {
          this._toastService.showToast({
            message: 'Authentication successfully',
            type: TypeToast.SUCCESS,
            date: moment(),
          });
          this.currentUser = result.user;
          this._router.navigateByUrl('/home');
        }
      })
      .catch((error) => {
        this._toastService.showToast({
          message: FirebaseService.mapCodeToMessage(error.code),
          type: TypeToast.DANGER,
          date: moment(),
        });
      });
  }

  isAuthenticated(): Observable<User | null> {
    return new Observable((obs) => {
      return onAuthStateChanged(
        this.auth,
        (user) => {
          this.currentUser = user;
          obs.next(user);
        },
        (err) => obs.error(err),
        () => obs.complete()
      );
    });
  }

  login(value: Login | null, method?: Provider) {
    if (method) this.useProvider(method);
    else if (value && !method) this.useEmailPassword(value);
  }

  useEmailPassword(value: Login) {
    signInWithEmailAndPassword(this.auth, value.email, value.password).then(
      (result) => {
        this.currentUser = result.user;
        this._router.navigateByUrl('/home');
      },
      (error) => {
        this._toastService.showToast({
          message: FirebaseService.mapCodeToMessage(error.code),
          type: TypeToast.DANGER,
          date: moment(),
        });
      }
    );
  }

  useProvider(method: Provider) {
    switch (method) {
      case Provider.GOOGLE:
        this.useGoogleProvider();
        break;
      case Provider.FACEBOOK:
        this.useFacebookProvider();
        break;
    }
  }

  useGoogleProvider() {
    signInWithRedirect(this.auth, this.googleProvider);
  }

  useFacebookProvider() {}

  signOut() {
    signOut(this.auth).then(() => console.log('logged out'));
  }
}
