import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'task-page',
    pathMatch: 'full',
  },
  {
    path: 'task-page',
    loadComponent: () =>
      import('./modules/task/task-page/task-page.component').then(
        (c) => c.TaskPageComponent
      ),
  },
  {
    path: 'task-edit-page/:id',
    loadComponent: () =>
      import('./modules/task/task-edit-page/task-edit-page.component').then(
        (c) => c.TaskEditPageComponent
      ),
  },
];
