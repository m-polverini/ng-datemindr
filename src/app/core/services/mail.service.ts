import { Injectable } from '@angular/core';
import { sendEmailVerification, User } from 'firebase/auth';
import * as moment from 'moment';
import { TypeToast } from '../models/toast/type-toast';
import { AuthService } from './auth.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private _toastService: ToastService) {}

  sendEmailVerification(user: User) {
    sendEmailVerification(user).then(() => {
      this._toastService.showToast({
        type: TypeToast.INFO,
        message: 'Verification email sended',
        date: moment(),
      });
    });
  }
}
