import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Car} from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private httpClient: HttpClient) {
  }

  public fetchCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>('http://localhost:3000/cars/all');
  }

  public fetchFilteredCars(brand: string, priceTo: number): Observable<Car[]> {
    return this.httpClient.get<Car[]>('http://localhost:3000/cars/all')
      .pipe(
        map((cars: Car[]) => cars.filter((car: Car) => {
          let shouldFilterCar: boolean;
          shouldFilterCar = !brand ? true : car.brand.toLowerCase().includes(brand.toLowerCase());
          return !priceTo ? shouldFilterCar : car.price < priceTo && shouldFilterCar;
        }))
      );
  }
}
