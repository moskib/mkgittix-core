import { Topics } from '../types/topics';
export interface TicketUpdatedEvent {
  topic: Topics.TicketUpdated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
    orderId?: string;
  };
}
