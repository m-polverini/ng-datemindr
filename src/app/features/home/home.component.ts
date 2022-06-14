import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { TypeToast } from 'src/app/core/models/toast/type-toast';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user$: Observable<User | null>;
  constructor(private _authService: AuthService, private _router: Router) {
    this.user$ = this._authService.isAuthenticated();
  }

  signOut() {
    this._authService.signOut();
    this._router.navigateByUrl('/login');
  }
}
