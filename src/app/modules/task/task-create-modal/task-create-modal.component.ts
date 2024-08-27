import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbActiveModal,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TaskCreateModalBuilder } from './task-create-modal.builder';
import { TaskCreateModalForm } from './task-create-modal.typings';
import { InputComponent } from '../../common/input/input.component';
import { FormErrorCode } from '../../../pipes/form-error/form-error.typings';
import { FormErrorPipe } from '../../../pipes/form-error/form-error.pipe';

@Component({
  selector: 'app-task-create-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgbDatepickerModule,
    FormsModule,
    JsonPipe,
    InputComponent,
    FormErrorPipe,
  ],
  providers: [TaskCreateModalBuilder],
  templateUrl: './task-create-modal.component.html',
  styleUrl: './task-create-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCreateModalComponent {
  public activeModal = inject(NgbActiveModal);
  public taskCreateModalBuilder = inject(TaskCreateModalBuilder);

  public formGroup: FormGroup<TaskCreateModalForm> =
    this.taskCreateModalBuilder.createFormGroup();

  public createTask(): void {
    this.formGroup.invalid
      ? this.formGroup.markAllAsTouched()
      : this.activeModal.close(this.formGroup.value);
  }
}
