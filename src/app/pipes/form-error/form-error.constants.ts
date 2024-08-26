import { ValidationErrors } from '@angular/forms';

export const FORM_ERROR_CODE: { [key in keyof ValidationErrors]: string } = {
  required: 'This field is required',
};
