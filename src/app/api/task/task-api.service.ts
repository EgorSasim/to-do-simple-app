import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { TaskDto } from './task-api.typings';

@Injectable()
export class TaskApiService {
  private readonly storeName: string = 'tasks';
  constructor(private ngxIndexedDBService: NgxIndexedDBService) {}

  public getTasks(): Observable<TaskDto[]> {
    return this.ngxIndexedDBService.getAll(this.storeName);
  }

  public getTaskById(id: TaskDto['id']): Observable<TaskDto> {
    return this.ngxIndexedDBService.getByID(
      this.storeName,
      id
    ) as Observable<TaskDto>;
  }

  public createTask(task: Omit<TaskDto, 'id'>): Observable<TaskDto> {
    return this.ngxIndexedDBService.add(
      this.storeName,
      task
    ) as Observable<TaskDto>;
  }

  public removeTask(id: TaskDto['id']): Observable<number[]> {
    return this.ngxIndexedDBService.bulkDelete(this.storeName, [id]);
  }

  public editTask(
    task: Partial<TaskDto> & { id: number }
  ): Observable<TaskDto> {
    return this.ngxIndexedDBService.update(
      this.storeName,
      task
    ) as Observable<TaskDto>;
  }
}
