import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Provider } from 'src/app/core/models/login/provider';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;
  GOOGLE = Provider.GOOGLE;
  FACEBOOK = Provider.FACEBOOK;

  constructor(private _fb: FormBuilder, private _authService: AuthService) {
    this.loginForm = this._fb.group({
      email: this._fb.control(null, [Validators.required, Validators.email]),
      password: this._fb.control(null, [Validators.required]),
    });
  }

  login(method?: Provider) {
    if (method) this._authService.login(null, method);
    else this._authService.login(this.loginForm.value);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
