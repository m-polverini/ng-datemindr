import { appInitialized } from './../models/appInitialized';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() {}
  static USER_NOT_FOUND: string = 'auth/user-not-found';
  static WRONG_PASSWORD: string = 'auth/wrong-password';
  static USER_DISABLED: string = 'auth/user-disabled';

  static mapCodeToMessage(code: string) {
    switch (code) {
      case FirebaseService.USER_NOT_FOUND:
        return 'User not found';
      case FirebaseService.WRONG_PASSWORD:
        return 'Wrong password';
      case FirebaseService.USER_DISABLED:
        return 'User blocked';
      default:
        return 'There is an error';
    }
  }
}
