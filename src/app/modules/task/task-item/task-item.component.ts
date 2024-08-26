import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  output,
  Output,
} from '@angular/core';
import { TaskItem } from '../types/task.typings';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent {
  public item = input<TaskItem>();

  public completeTaskEmit = output<TaskItem['id']>();

  public removeTaskEmit = output<TaskItem['id']>();

  public completeTask(event: Event, taskId: TaskItem['id']) {
    event.stopPropagation();
    this.completeTaskEmit.emit(taskId);
  }

  public removeTask(event: Event, taskId: TaskItem['id']) {
    event.stopPropagation();
    this.removeTaskEmit.emit(taskId);
  }

  public navigateTaskEditPage(): void {
    console.log('go to task edit page');
  }
}
