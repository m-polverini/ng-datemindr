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
  static EMAIL_ALREADY_USED: string = 'auth/email-already-in-use';
  static INVALID_EMAIL: string = 'auth/invalid-email';
  static OPERATION_NOT_ALLOWED: string = 'auth/operation-not-allowed';
  static WEAK_PASSWORD: string = 'auth/weak-password';

  static mapCodeToMessage(code: string) {
    switch (code) {
      case FirebaseService.USER_NOT_FOUND:
        return 'User not found';
      case FirebaseService.WRONG_PASSWORD:
        return 'Wrong password';
      case FirebaseService.USER_DISABLED:
        return 'User blocked';
      case FirebaseService.EMAIL_ALREADY_USED:
        return 'Email address already used';
      case FirebaseService.INVALID_EMAIL:
        return 'Invalid email';
      case FirebaseService.OPERATION_NOT_ALLOWED:
        return 'Operation not allowed';
      case FirebaseService.WEAK_PASSWORD:
        return 'Weak password';
      default:
        return 'There is an error';
    }
  }
}
