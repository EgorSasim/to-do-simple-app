import { Pipe, PipeTransform } from '@angular/core';
import { FORM_ERROR_CODE } from './form-error.constants';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  standalone: true,
  name: 'formError',
})
export class FormErrorPipe implements PipeTransform {
  public transform(value: ValidationErrors) {
    console.log('value: ', value);
    return FORM_ERROR_CODE[value[0]];
  }
}
