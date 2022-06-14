import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import { TimePipe } from './pipes/time.pipe';
import { ValidatorPasswordComponent } from './components/validator-password/validator-password.component';

@NgModule({
  declarations: [ToastComponent, TimePipe, ValidatorPasswordComponent],
  imports: [CommonModule],
  exports: [ToastComponent, TimePipe, ValidatorPasswordComponent],
})
export class SharedModule {}
