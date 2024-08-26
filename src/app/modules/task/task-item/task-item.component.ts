import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
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

  @Output() public completeTaskEmit: EventEmitter<TaskItem['id']> =
    new EventEmitter();

  @Output() public removeTaskEmit: EventEmitter<TaskItem['id']> =
    new EventEmitter();

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
