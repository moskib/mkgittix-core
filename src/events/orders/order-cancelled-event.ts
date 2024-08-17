import { Topics } from '../types/topics';
export interface OrderCancelledEvent {
  topic: Topics.OrderCancelled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
