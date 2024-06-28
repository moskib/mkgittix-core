import { Subjects } from '../core/types/subjects';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    ide: string;
    ticket: {
      id: string;
    };
  };
}
