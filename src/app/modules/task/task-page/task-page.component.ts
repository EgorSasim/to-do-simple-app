import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskService } from '../services/task.service';
import { TaskItem } from '../types/task.typings';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskCreateModalComponent } from '../task-create-modal/task-create-modal.component';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [TaskListComponent, CommonModule, TaskCreateModalComponent],
  providers: [TaskService],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskPageComponent {
  public tasks$: Observable<TaskItem[]> = this.taskService.getTasks();
  constructor(
    private taskService: TaskService,
    private modalService: NgbModal
  ) {}

  public addTask(): void {
    this.modalService
      .open(TaskCreateModalComponent, {
        size: 'lg',
        centered: true,
      })
      .closed.subscribe((res) => {
        console.log('on close result: ', res);
      });
  }
}
