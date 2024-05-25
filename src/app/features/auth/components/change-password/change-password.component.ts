import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasNumber = /[0-9]/.test(value);
    const hasAlpha = /[a-zA-Z]/.test(value);
    const isLengthValid = value.length >= 8;
    const passwordValid = hasNumber && hasAlpha && isLengthValid;
    return !passwordValid ? { 'passwordStrength': true } : null;
  };
}

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  showPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group({
      changePassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, passwordStrengthValidator()]],
      confirmPassword: ['', Validators.required]
    },{ validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['newPassword'].value === frm.controls['confirmPassword'].value ? null : { 'mismatch': true };
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      console.log('Form Data:', this.changePasswordForm.value);
      // Handle form submission here
    }
  }
  toggleCurrentPasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  toggleNewPasswordVisibility(): void {
    this.showNewPassword = !this.showNewPassword;
  }
  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  getErrorMessage(field: string): string {
    const control = this.changePasswordForm.get(field);
    if (control && control.touched) {
      if (control.hasError('required')) {
        return 'This field is required.';
      }
      if (field === 'newPassword' && control.hasError('passwordStrength')) {
        return 'Password must be at least 8 characters long';
      }
      // The 'mismatch' error is set on the form group, so you should check for it at the form level, not at the field level
      if (this.changePasswordForm.hasError('mismatch') && (field === 'newPassword' || field === 'confirmPassword')) {
        return 'Passwords do not match.';
      }
    }
    return '';
  }

}
