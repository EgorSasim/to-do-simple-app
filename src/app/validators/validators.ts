import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { convertControlDateToDate } from './validators.helpers';
import { DateControlFormat } from '../modules/task/types/task.typings';

export function incompatibleDatesValidator(
  firstDateControlName: string,
  secondDateControlName: string
): ValidatorFn {
  return (form: FormGroup): ValidationErrors | null => {
    const firstControlVal: DateControlFormat =
      form.controls[firstDateControlName].value;
    const secondControlVal: DateControlFormat =
      form.controls[secondDateControlName].value;
    if (!(firstControlVal && secondControlVal)) {
      return null;
    }

    const firstDate = convertControlDateToDate(firstControlVal);
    const secDate = convertControlDateToDate(secondControlVal);

    return firstDate > secDate ? { incompatibleDates: true } : null;
  };
}
