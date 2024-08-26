import { Pipe, PipeTransform } from '@angular/core';
import { FORM_ERROR_CODE } from './form-error.constants';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  standalone: true,
  name: 'formError',
})
export class FormErrorPipe implements PipeTransform {
  public transform(value: ValidationErrors) {
    return FORM_ERROR_CODE[Object.keys(value)[0]];
  }
}
