import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ViewChild,
} from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskService } from '../services/task.service';
import { TaskItem } from '../types/task.typings';
import { BehaviorSubject, filter, Observable, switchMap, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskCreateModalComponent } from '../task-create-modal/task-create-modal.component';
import { TaskCreateModal } from '../task-create-modal/task-create-modal.typings';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [TaskListComponent, CommonModule, TaskCreateModalComponent],
  providers: [TaskService],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskPageComponent implements AfterViewInit {
  @ViewChild(TaskListComponent) taskListComponent: TaskListComponent;
  public tasks$: Observable<TaskItem[]> = this.taskService.tasks$;
  public taskListChange$: BehaviorSubject<void> = new BehaviorSubject(null);

  constructor(
    private taskService: TaskService,
    private modalService: NgbModal,
    private changeDetectorRef: ChangeDetectorRef,
    private destroyRef: DestroyRef
  ) {}

  public ngAfterViewInit(): void {
    this.tasks$
      .pipe(
        tap(() => this.taskListComponent.triggerChangeDetection()),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public addTask(): void {
    this.modalService
      .open(TaskCreateModalComponent, {
        size: 'lg',
        centered: true,
        animation: false,
        backdrop: true,
        keyboard: true,
      })
      .closed.pipe(
        filter(Boolean),
        switchMap((task: TaskCreateModal) => this.taskService.createTask(task))
      )
      .subscribe();
  }

  public removeTask(taskId: TaskItem['id']): void {
    this.taskService.removeTask(taskId).subscribe();
  }

  public completeTask(taskId: TaskItem['id']): void {
    this.taskService.editTask({ id: taskId, completed: true }).subscribe();
  }
}
