import {AbstractControl} from "@angular/forms";

export type StandardValidator = { [key: string]: boolean } | null

export const PasswordValidator = (control: AbstractControl): StandardValidator => {
  const password = control.get('password')
  const rePassword = control.get('rePassword')

  const hasError = password && rePassword && password.value !== rePassword.value
  if (hasError) rePassword?.setErrors({'mismatch': true})

  return hasError ? {'mismatch': true} : null
}
