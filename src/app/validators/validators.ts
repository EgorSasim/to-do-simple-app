import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function incompatibleDatesValidator(
  firstDateControlName: string,
  secondDateControlName: string
): ValidatorFn {
  return (form: FormGroup): ValidationErrors | null => {
    const firstControlVal: Date = form.controls[firstDateControlName].value;
    const secondControlVal: Date = form.controls[secondDateControlName].value;
    if (!(firstControlVal && secondControlVal)) {
      return null;
    }

    return firstControlVal > secondControlVal
      ? { incompatibleDates: true }
      : null;
  };
}
