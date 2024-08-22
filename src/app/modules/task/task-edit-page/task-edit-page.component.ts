import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task-edit-page',
  standalone: true,
  imports: [],
  templateUrl: './task-edit-page.component.html',
  styleUrl: './task-edit-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskEditPageComponent {

}
