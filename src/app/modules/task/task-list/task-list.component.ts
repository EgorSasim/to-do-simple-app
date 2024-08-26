import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  input,
  output,
} from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskItem } from '../types/task.typings';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  public taskList = input<TaskItem[]>();
  public removeTaskEmit = output<TaskItem['id']>();
  public completeTaskEmit = output<TaskItem['id']>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public triggerChangeDetection(): void {
    this.changeDetectorRef.detectChanges();
  }

  public removeTask(taskId: TaskItem['id']): void {
    this.removeTaskEmit.emit(taskId);
  }

  public completeTask(taskId: TaskItem['id']): void {
    this.completeTaskEmit.emit(taskId);
  }
}
