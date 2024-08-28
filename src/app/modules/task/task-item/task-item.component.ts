import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { TaskItem } from '../types/task.typings';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent {
  public item = input<TaskItem>();
  public completeTaskEmit = output<{
    taskId: TaskItem['id'];
    isCompleted: TaskItem['completed'];
  }>();
  public removeTaskEmit = output<TaskItem['id']>();

  constructor(private router: Router) {}

  public completeTask(
    event: Event,
    taskId: TaskItem['id'],
    isCompleted: boolean
  ) {
    event.stopPropagation();
    this.completeTaskEmit.emit({ taskId, isCompleted });
  }

  public removeTask(event: Event, taskId: TaskItem['id']) {
    event.stopPropagation();
    this.removeTaskEmit.emit(taskId);
  }

  public navigateTaskEditPage(event: Event, taskId: TaskItem['id']): void {
    event.stopPropagation();
    this.router.navigate(['task-edit-page', taskId]);
  }
}
