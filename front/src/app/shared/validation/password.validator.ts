import { AbstractControl } from '@angular/forms';

export type StandardValidatorType = { [key: string]: boolean } | null;

export const PasswordValidator = (control: AbstractControl): StandardValidatorType => {
  const password: AbstractControl | null = control.get('password');
  const rePassword: AbstractControl | null = control.get('rePassword');

  const hasError: boolean = !!(password && rePassword && password.value !== rePassword.value);
  if (hasError) rePassword?.setErrors( { 'mismatch': true } );

  return hasError ? { 'mismatch': true } : null;
}
