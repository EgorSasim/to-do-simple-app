import { ConvertToForm } from '../../../helpers/form';

export interface TaskItem {
  id: number;
  name: string;
  description?: string;
  completed: boolean;
  startDate?: DateControlFormat;
  endDate?: DateControlFormat;
}

export type DateControlFormat = {
  day: number;
  month: number;
  year: number;
};

export type TaskItemForm = ConvertToForm<TaskItem>;
