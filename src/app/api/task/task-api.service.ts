import { Injectable } from '@angular/core';
import { TaskPageComponent } from '../../modules/task/task-page/task-page.component';
import { TaskDto } from './task-api.typings';
import { TASKS } from './task.constants';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
  public getTasks(): Observable<TaskDto[]> {
    return of(TASKS);
  }

  public getTaskById(id: TaskDto['id']): Observable<TaskDto> {
    return of(TASKS.find((task) => (task.id = id)));
  }

  public createTask(task: Omit<TaskDto, 'id'>): Observable<TaskDto['id']> {
    const id = Math.max(...TASKS.map((task) => task.id)) + 1;
    const createdTask: TaskDto = { ...task, id: id };
    TASKS.push(createdTask);
    return of(id);
  }

  public removeTask(id: TaskDto['id']): Observable<void> {
    const removedTaskIndex = TASKS.findIndex((task) => task.id === id);
    TASKS.splice(removedTaskIndex, 1);
    return of();
  }

  public editTask(task: TaskDto): Observable<void> {
    const taskToUpdateIndex = TASKS.findIndex((task) => task.id === task.id);
    if (~taskToUpdateIndex) {
      TASKS[taskToUpdateIndex] = { ...task };
    }
    return of();
  }
}
