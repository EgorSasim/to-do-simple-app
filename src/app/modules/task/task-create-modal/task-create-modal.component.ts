import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbActiveModal,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-create-modal',
  standalone: true,
  imports: [ReactiveFormsModule, NgbDatepickerModule, FormsModule, JsonPipe],
  templateUrl: './task-create-modal.component.html',
  styleUrl: './task-create-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCreateModalComponent {
  public activeModal = inject(NgbActiveModal);
}
