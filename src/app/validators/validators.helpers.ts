import { DateControlFormat } from './validators.typings';

export function convertControlDateToDate(
  controlValue: DateControlFormat
): Date {
  return new Date(controlValue.year, controlValue.month, controlValue.day);
}
