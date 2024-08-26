import { ConvertToForm } from '../../../helpers/form';

export interface TaskItem {
  id: number;
  name: string;
  description?: string;
  completed: boolean;
  startDate?: Date;
  endDate?: Date;
}

export type TaskItemForm = ConvertToForm<TaskItem>;
