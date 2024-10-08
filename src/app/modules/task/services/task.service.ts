import { Injectable } from '@angular/core';
import { TaskApiService } from '../../../api/task/task-api.service';
import { TaskItem } from '../types/task.typings';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';

@Injectable()
export class TaskService {
  private updateTasks$: BehaviorSubject<void> = new BehaviorSubject(null);

  constructor(private taskApiService: TaskApiService) {}

  public tasks$: Observable<TaskItem[]> = this.updateTasks$.pipe(
    switchMap(() => this.taskApiService.getTasks())
  );

  public getTaskById(id: TaskItem['id']): Observable<TaskItem> {
    return this.taskApiService.getTaskById(id);
  }

  public createTask(task: Omit<TaskItem, 'id'>): Observable<TaskItem['id']> {
    return this.taskApiService.createTask(task).pipe(
      map((task) => task.id),
      tap(() => this.updateTasks$.next(null))
    );
  }

  public removeTask(id: TaskItem['id']): Observable<void> {
    return this.taskApiService.removeTask(id).pipe(
      map(() => null),
      tap(() => this.updateTasks$.next(null))
    );
  }

  public editTask(task: Partial<TaskItem> & { id: number }): Observable<void> {
    return this.taskApiService.editTask(task).pipe(
      map(() => null),
      tap(() => this.updateTasks$.next(null))
    );
  }

  public completeTask(taskState: {
    taskId: TaskItem['id'];
    isCompleted: TaskItem['completed'];
  }): Observable<TaskItem> {
    return this.taskApiService.getTaskById(taskState.taskId).pipe(
      switchMap((task) =>
        this.taskApiService.editTask({
          ...task,
          completed: taskState.isCompleted,
        })
      ),
      tap(() => this.updateTasks$.next(null))
    );
  }
}
