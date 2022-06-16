import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validator-password',
  templateUrl: './validator-password.component.html',
  styleUrls: ['./validator-password.component.scss'],
})
export class ValidatorPasswordComponent {
  points: number = 0;

  constructor() {}

  calc(password: string) {
    this.points = 0;
    if (password.length > 8) this.points += 20;
    if (password.match(/\d/)) this.points += 20;
    if (password.match(/[A-Z]/)) this.points += 20;
    if (password.match(/[a-z]/)) this.points += 20;
    if (password.match(/\W|_/g)) this.points += 20;
  }

  getValidation(): string {
    switch (this.points) {
      case 0:
        return '';
      case 20:
        return 'Not safe';
      case 40:
        return 'Warning';
      case 60:
        return 'Ok';
      case 80:
        return 'Good';
      case 100:
        return 'Excellent';
    }
    return '';
  }
}
