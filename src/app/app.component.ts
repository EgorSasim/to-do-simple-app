import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskPageComponent } from './modules/task/task-page/task-page.component';
import { DatabaseModule } from './database/database.module';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { TaskApiService } from './api/task/task-api.service';
import { TaskService } from './modules/task/services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TaskPageComponent, DatabaseModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TaskService, TaskApiService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'to-do-simple-app';
}
