import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskPageComponent {}
