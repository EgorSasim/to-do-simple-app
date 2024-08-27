import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  input,
  output,
} from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskItem } from '../types/task.typings';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, NgbAccordionModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  public taskList = input<TaskItem[]>();
  public removeTaskEmit = output<TaskItem['id']>();
  public completeTaskEmit = output<{
    taskId: TaskItem['id'];
    isCompleted: TaskItem['completed'];
  }>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public triggerChangeDetection(): void {
    this.changeDetectorRef.detectChanges();
  }

  public removeTask(taskId: TaskItem['id']): void {
    this.removeTaskEmit.emit(taskId);
  }

  public completeTask(taskState: {
    taskId: TaskItem['id'];
    isCompleted: boolean;
  }): void {
    this.completeTaskEmit.emit({
      ...taskState,
    });
  }
}
