import { Injectable } from '@angular/core';
import { TaskPageComponent } from '../task-page/task-page.component';
import { TaskApiService } from '../../../api/task/task-api.service';
import { DateControlFormat, TaskItem } from '../types/task.typings';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { TaskDto } from '../../../api/task/task-api.typings';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private updateTasks$: BehaviorSubject<void> = new BehaviorSubject(null);

  constructor(private taskApiService: TaskApiService) {}

  public tasks$: Observable<TaskItem[]> = this.updateTasks$.pipe(
    switchMap(() => this.taskApiService.getTasks()),
    map((tasks) => tasks.map((task) => this.mapTaskDtoToTaskItem(task)))
  );

  public getTaskById(id: TaskItem['id']): Observable<TaskItem> {
    return this.taskApiService
      .getTaskById(id)
      .pipe(map((task) => this.mapTaskDtoToTaskItem(task)));
  }

  public createTask(task: Omit<TaskItem, 'id'>): Observable<TaskItem['id']> {
    return this.taskApiService
      .createTask(this.mapTaskItemToTaskDto(task as TaskItem))
      .pipe(tap(() => this.updateTasks$.next(null)));
  }

  public removeTask(id: TaskItem['id']): Observable<void> {
    return this.taskApiService
      .removeTask(id)
      .pipe(tap(() => this.updateTasks$.next(null)));
  }

  public editTask(task: Partial<TaskItem> & { id: number }): Observable<void> {
    return this.taskApiService
      .editTask(this.mapTaskItemToTaskDto(task as TaskItem))
      .pipe(tap(() => this.updateTasks$.next(null)));
  }

  private mapTaskItemToTaskDto(task: TaskItem): TaskDto {
    return {
      ...task,
      startDate: this.convertControlDateToDate(task.startDate),
      endDate: this.convertControlDateToDate(task.endDate),
    };
  }

  private mapTaskDtoToTaskItem(taskDto: TaskDto): TaskItem {
    return {
      ...taskDto,
      startDate: taskDto.startDate
        ? this.convertDateToDateControl(taskDto.endDate)
        : null,
      endDate: taskDto.endDate
        ? this.convertDateToDateControl(taskDto.endDate)
        : null,
    };
  }

  private convertControlDateToDate(controlValue: DateControlFormat): Date {
    return new Date(controlValue?.year, controlValue?.month, controlValue?.day);
  }

  private convertDateToDateControl(date: Date): DateControlFormat {
    return {
      day: date?.getDay(),
      month: date?.getMonth(),
      year: date?.getFullYear(),
    };
  }
}
