import { Injectable } from '@angular/core';
import { Booking } from './booking.module';

@Injectable({ providedIn: 'root' })
export class BookingService {
    private bookings1: Booking[] = [
        {
            id: 'xyz',
            placeId: 'p1',
            placeTitle: 'Ottawa',
            guestNumber: 2,
            userId: 'abc'
        }
    ];

    get bookings() {
        return [...this.bookings1];
    }
}
