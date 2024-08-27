import { FormControl } from '@angular/forms';
import { ConvertToForm } from '../../../helpers/form';
import { TaskItem } from '../types/task.typings';
import { DateControlFormat } from '../../../validators/validators.typings';

export type TaskCreateModal = Omit<TaskItem, 'id'>;
export type TaskCreateModalForm = ConvertToForm<TaskCreateModal>;
