import {Component, OnInit} from '@angular/core';

import {Car} from './car-card/car';
import {CarService} from './car-card/car.service';
import {EMPTY, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public cars$: Observable<Car[]>;
  public isError: boolean = false;

  private brandValue: string;
  private priceToValue: number;

  constructor(private carService: CarService) {
  }

  public ngOnInit(): void {
    this.cars$ = this.carService.fetchCars()
      .pipe(catchError(() => this.handleError()));
  }

  public brandValueChanged(value: string | number): void {
    this.brandValue = value as string;
  }

  public priceToValueChanged(value: string | number): void {
    this.priceToValue = value as number;
  }

  public searchCars(): void {
    this.isError = false;
    this.cars$ = this.carService.fetchFilteredCars(this.brandValue, this.priceToValue)
      .pipe(catchError(() => this.handleError()));
  }

  private handleError(): Observable<never> {
    this.isError = true;
    return EMPTY;
  }
}
