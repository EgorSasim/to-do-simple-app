import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskItem, TaskItemForm } from '../types/task.typings';
import { TaskEditPageBuilder } from './task-edit.page.builder';
import { InputComponent } from '../../common/input/input.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { FormErrorPipe } from '../../../pipes/form-error/form-error.pipe';

@Component({
  selector: 'app-task-edit-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgbDatepickerModule,
    FormsModule,
    JsonPipe,
    InputComponent,
    FormErrorPipe,
  ],
  templateUrl: './task-edit-page.component.html',
  styleUrl: './task-edit-page.component.scss',
  providers: [TaskEditPageBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEditPageComponent {
  public formGroup: FormGroup<TaskItemForm>;
  public formGroupInitialValue: TaskItem;

  constructor(
    private taskService: TaskService,
    private taskEditPageBuilder: TaskEditPageBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.handleRouteIdChange();
  }

  public revert(): void {
    this.formGroup.setValue(this.formGroupInitialValue);
  }

  public save(): void {
    if (this.formGroup.invalid) {
      console.log('form group: ', this.formGroup);
      this.formGroup.markAllAsTouched();
      return;
    }
    console.log('save click');
    this.taskService
      .editTask(this.formGroup.value as TaskItem)
      .subscribe(() => {
        this.router.navigate(['task-page']);
      });
  }

  private handleRouteIdChange(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => +params.get('id')),
        switchMap((id) => this.taskService.getTaskById(id))
      )
      .subscribe((task) => {
        this.formGroup = this.taskEditPageBuilder.createFormGroup(task);
        console.log('form group: ', this.formGroup.value);
        this.formGroupInitialValue = this.formGroup.value as TaskItem;
      });
  }
}
