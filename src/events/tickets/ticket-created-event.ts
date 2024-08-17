import { Topics } from '../types/topics';

export interface TicketCreatedEvent {
  subject: Topics.TicketCreated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
  };
}
