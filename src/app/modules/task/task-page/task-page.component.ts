import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskService } from '../services/task.service';
import { TaskItem } from '../types/task.typings';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [TaskListComponent, CommonModule],
  providers: [TaskService],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskPageComponent {
  public tasks$: Observable<TaskItem[]> = this.taskService.getTasks();
  constructor(private taskService: TaskService) {}
}
