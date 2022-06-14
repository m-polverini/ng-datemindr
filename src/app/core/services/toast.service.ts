import { Toast } from './../models/toast/toast';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class ToastService implements OnDestroy {
  private _toasts: BehaviorSubject<Toast[] | null> = new BehaviorSubject<
    Toast[] | null
  >(null);
  toasts$: Observable<Toast[] | null> = this._toasts.asObservable();
  private _subscription?: Subscription;

  constructor() {
    this.updateValue();
  }
  ngOnDestroy(): void {
    if (this._subscription) this._subscription.unsubscribe();
  }

  showToast(toast: Toast) {
    toast.time = moment(toast.date).fromNow();
    const value = this._toasts.getValue();
    if (value) {
      value.push(toast);
      this._toasts.next(value);
    } else {
      this._toasts.next([toast]);
    }
  }

  removeToast(index: number) {
    const value = this._toasts.getValue();
    if (value) {
      value.splice(index, 1);
      this._toasts.next(value);
    }
  }

  updateValue() {
    this._subscription = interval().subscribe(() => {
      let value = this._toasts.getValue();
      if (value) {
        this._toasts.next(
          value.filter((toast) => moment().diff(toast.date, 'seconds') < 10)
        );
      }
    });
  }
}
