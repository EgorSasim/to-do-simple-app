import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input() public item: TaskItem;
}
