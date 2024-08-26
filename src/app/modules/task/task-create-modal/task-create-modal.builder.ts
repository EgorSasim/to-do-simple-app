import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskCreateModalForm } from './task-create-modal.typings';

@Injectable()
export class TaskCreateModalBuilder {
  public createFormGroup(): FormGroup<TaskCreateModalForm> {
    return new FormGroup<TaskCreateModalForm>({
      completed: new FormControl(false),
      name: new FormControl(null, Validators.required),
      description: new FormControl(null),
      endDate: new FormControl(null),
      startDate: new FormControl(null),
    });
  }
}
