import { FormControl } from '@angular/forms';

export type ConvertToForm<T> = {
  [K in keyof T]: FormControl<T[K] | null>;
};

export type NgbDatePickerDate = { year: number; month: number; day: number };

export function convertNgbDatePickerDateToDate(
  ngbDate: NgbDatePickerDate
): Date {
  return new Date(ngbDate.year, ngbDate.month, ngbDate.day);
}

export function convertDateToNgbDatePickerDate(date: Date): NgbDatePickerDate {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDay(),
  };
}
