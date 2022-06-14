import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval, Observable } from 'rxjs';
import { Toast } from 'src/app/core/models/toast/toast';
import { TypeToast } from 'src/app/core/models/toast/type-toast';
import { ToastService } from 'src/app/core/services/toast.service';
import { TimePipe } from '../../pipes/time.pipe';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  toasts$: Observable<Toast[] | null>;
  constructor(private _toastService: ToastService) {
    this.toasts$ = this._toastService.toasts$;
  }
  remove(index: number) {
    this._toastService.removeToast(index);
  }

  getColorToast(type: TypeToast): string {
    switch (type) {
      case TypeToast.DANGER:
        return 'bg-danger text-white';
      case TypeToast.INFO:
        return 'bg-info text-dark';
      case TypeToast.SUCCESS:
        return 'bg-success text-white';
      case TypeToast.WARNING:
        return 'bg-warning text-dark';
      case TypeToast.DEFAULT:
        return '';
    }
  }
}
