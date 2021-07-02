import {Validators} from "@angular/forms";

export const standardValidators: Validators[] = [
  Validators.required,
  Validators.minLength(3),
  Validators.maxLength(50)
];
