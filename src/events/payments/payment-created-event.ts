import { Topics } from '../types/topics';
export interface PaymentCreatedEvent {
  subject: Topics.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
}
