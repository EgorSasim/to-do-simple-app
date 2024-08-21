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
];
