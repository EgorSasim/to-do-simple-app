import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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
}
