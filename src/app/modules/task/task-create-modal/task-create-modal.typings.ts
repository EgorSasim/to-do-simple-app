import { ConvertToForm } from '../../../helpers/form';
import { TaskItem } from '../types/task.typings';

export type TaskCreateModal = Omit<TaskItem, 'id'>;
export type TaskCreateModalForm = ConvertToForm<TaskCreateModal>;
