import { Topics } from '../types/topics';

export interface ExpirationCompleteEvent {
  subject: Topics.ExpirationComplete;
  data: {
    orderId: string;
  };
}
