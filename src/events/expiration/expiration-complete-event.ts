import { Topics } from '../types/topics';

export interface ExpirationCompleteEvent {
  topic: Topics.ExpirationComplete;
  data: {
    orderId: string;
  };
}
