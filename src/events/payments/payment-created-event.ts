import { Topics } from '../types/topics';
export interface PaymentCreatedEvent {
  topic: Topics.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
}
