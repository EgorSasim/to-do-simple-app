import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbActiveModal,
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormErrorPipe } from '../../../pipes/form-error/form-error.pipe';
import { InputComponent } from '../../common/input/input.component';
import { TaskCreateModalBuilder } from './task-create-modal.builder';
import { TaskCreateModalForm } from './task-create-modal.typings';

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
  providers: [
    TaskCreateModalBuilder,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
  ],
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
