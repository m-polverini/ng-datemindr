import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ValidatorPasswordComponent } from 'src/app/shared/components/validator-password/validator-password.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnDestroy {
  @ViewChild('validator')
  validatorPassword?: ValidatorPasswordComponent;

  _pswSubscription?: Subscription;

  form: FormGroup;
  showPassword: boolean = false;
  constructor(private _fb: FormBuilder, private _authService: AuthService) {
    this.form = this._fb.group({
      email: this._fb.control(null, [Validators.required, Validators.email]),
      password: this._fb.control(null, [Validators.required]),
    });

    this._pswSubscription = this.form
      .get('password')
      ?.valueChanges.subscribe((value) => {
        console.log(value);
        this.validatorPassword?.calc(value);
      });
  }
  ngOnDestroy(): void {
    if (this._pswSubscription) this._pswSubscription.unsubscribe();
  }

  create() {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
}
