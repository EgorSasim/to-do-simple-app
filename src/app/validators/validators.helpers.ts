import { DateControlFormat } from '../modules/task/types/task.typings';

export function convertControlDateToDate(
  controlValue: DateControlFormat
): Date {
  return new Date(controlValue.year, controlValue.month, controlValue.day);
}
