import { FormErrorCode } from './form-error.typings';

export const FORM_ERROR_CODE: { [key in FormErrorCode]: string } = {
  [FormErrorCode.Required]: 'This field is required',
  [FormErrorCode.IncompatibleDates]: "Start date can't be more than end date",
};
