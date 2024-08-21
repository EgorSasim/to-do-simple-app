import { Injectable } from '@angular/core';
import { TaskPageComponent } from '../task-page/task-page.component';
import { TaskApiService } from '../../../api/task/task-api.service';
import { TaskItem } from '../types/task.typings';
import { Observable } from 'rxjs';

@Injectable()
export class TaskService {
  constructor(private taskApiService: TaskApiService) {}

  public getTasks(): Observable<TaskItem[]> {
    return this.taskApiService.getTasks();
  }

  public getTaskById(id: TaskItem['id']): Observable<TaskItem> {
    return this.taskApiService.getTaskById(id);
  }

  public createTask(task: Omit<TaskItem, 'id'>): Observable<TaskItem['id']> {
    return this.taskApiService.createTask(task);
  }

  public removeTask(id: TaskItem['id']): Observable<void> {
    return this.taskApiService.removeTask(id);
  }

  public editTask(task: TaskItem): Observable<void> {
    return this.taskApiService.editTask(task);
  }
}
