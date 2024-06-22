import { Subjects } from '../core/types/subjects';
export interface TicketUpdatedEvent {
    subject: Subjects.TicketUpdated;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
    };
}
