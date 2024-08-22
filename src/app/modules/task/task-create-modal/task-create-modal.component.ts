import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-create-modal',
  standalone: true,
  imports: [],
  templateUrl: './task-create-modal.component.html',
  styleUrl: './task-create-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCreateModalComponent {
  public activeModal = inject(NgbActiveModal);
}
