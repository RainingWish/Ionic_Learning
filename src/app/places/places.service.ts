import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private Places1: Place[] = [
    new Place(
      'p1',
      'Ottawa',
      'some where in Ottawa',
      'https://fasken.azureedge.net/-/media/29b8b6a371344d40a392350b395691d6.ashx?mw=2560&modified=20190517160449&hash=69328985F09305B8D5FFD44766B77D53',
      399.99
    ),
    new Place(
      'p2',
      'Toronto',
      'some where in Toronto',
      'https://media.radissonhotels.net/image/destination-pages/localattraction/16256-118729-f63224478_3xl.jpg?impolicy=HomeHero',
      189.99
    ),
    new Place(
      'p3',
      'Montreal',
      'some where in Montreal',
      'https://www.quebecoriginal.com/en/listing/images/800x600/3c34816c-9a22-4520-a983-4d9ff11cc2ee/the-montreal-tower-la-tour-de-montreal.jpg',
      209.99
    ),
  ];

  get places() {
    return [...this.Places1];
  }

  getPlaces(id: string) {
    return { ...this.Places1.find(p => p.id === id) };
  }

  constructor() { }
}
