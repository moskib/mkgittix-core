import { Topics } from '../types/topics';
export interface OrderCancelledEvent {
  subject: Topics.OrderCancelled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
