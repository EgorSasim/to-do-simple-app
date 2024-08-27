import { Pipe, PipeTransform } from '@angular/core';
import { DateControlFormat } from '../../modules/task/types/task.typings';

@Pipe({
  standalone: true,
  name: 'controlDate',
})
export class ControlDatePipe implements PipeTransform {
  public transform(controlDate: DateControlFormat) {
    console.log('control date: ', controlDate);
    return new Date(controlDate.year, controlDate.month, controlDate.day);
  }
}
