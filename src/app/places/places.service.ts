import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private authService: AuthService) { }

  private Places1 = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Ottawa',
      'some where in Ottawa',
      // tslint:disable-next-line:max-line-length
      'https://fasken.azureedge.net/-/media/29b8b6a371344d40a392350b395691d6.ashx?mw=2560&modified=20190517160449&hash=69328985F09305B8D5FFD44766B77D53',
      399.99,
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'user1'
    ),
    new Place(
      'p2',
      'Toronto',
      'some where in Toronto',
      'https://media.radissonhotels.net/image/destination-pages/localattraction/16256-118729-f63224478_3xl.jpg?impolicy=HomeHero',
      189.99,
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'user1'
    ),
    new Place(
      'p3',
      'Montreal',
      'some where in Montreal',
      // tslint:disable-next-line:max-line-length
      'https://www.quebecoriginal.com/en/listing/images/800x600/3c34816c-9a22-4520-a983-4d9ff11cc2ee/the-montreal-tower-la-tour-de-montreal.jpg',
      209.99,
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'user1'
    ),
  ]);

  get places() {
    return this.Places1.asObservable();
  }

  getPlaces(id: string) {
    return this.places.pipe(take(1), map(places => {
      return { ...places.find(p => p.id === id) };
    }));

  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://media.radissonhotels.net/image/destination-pages/localattraction/16256-118729-f63224478_3xl.jpg?impolicy=HomeHero',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this.Places1.pipe(take(1), delay(1000), tap(places => {
      this.Places1.next(places.concat(newPlace));
    }));
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this.places.pipe(take(1), delay(1000), tap(places => {
      const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
      const updatedPlaces = [...places];
      const oldPlaces = updatedPlaces[updatedPlaceIndex];
      updatedPlaces[updatedPlaceIndex] = new Place(
        oldPlaces.id,
        title,
        description,
        oldPlaces.imageUrl,
        oldPlaces.price,
        oldPlaces.availableFrom,
        oldPlaces.availableTo,
        oldPlaces.userId);
      this.Places1.next(updatedPlaces);
    }));
  }

}
