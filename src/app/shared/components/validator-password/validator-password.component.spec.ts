import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorPasswordComponent } from './validator-password.component';

describe('ValidatorPasswordComponent', () => {
  let component: ValidatorPasswordComponent;
  let fixture: ComponentFixture<ValidatorPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatorPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatorPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
