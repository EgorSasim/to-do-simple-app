import { Injectable } from '@angular/core';
import { TaskItem, TaskItemForm } from '../types/task.typings';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { incompatibleDatesValidator } from '../../../validators/validators';

@Injectable()
export class TaskEditPageBuilder {
  public createFormGroup(taskItem: TaskItem): FormGroup<TaskItemForm> {
    return new FormGroup<TaskItemForm>(
      {
        id: new FormControl(taskItem.id),
        completed: new FormControl(taskItem.completed),
        name: new FormControl(taskItem.name, [Validators.required]),
        description: new FormControl(taskItem.description),
        startDate: new FormControl(taskItem.startDate),
        endDate: new FormControl(taskItem.endDate),
      },
      [incompatibleDatesValidator('startDate', 'endDate')]
    );
  }
}
