export interface TaskDto {
  id: number;
  name: string;
  description?: string;
  completed: boolean;
  startDate?: Date;
  endDate?: Date;
}
