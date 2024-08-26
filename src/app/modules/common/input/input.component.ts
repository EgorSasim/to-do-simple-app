import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormErrorPipe } from '../../../pipes/form-error/form-error.pipe';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormErrorPipe],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  public placeHolder = input<string>();
  public control = input<FormControl<any>>();
}
