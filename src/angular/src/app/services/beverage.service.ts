import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {noop, Observable} from 'rxjs';
import {Beverage} from '../models/beverage';
import {environment} from '../../environments/environment';

export interface IGetBeverageById {
  getBeverageById(id: number): Observable<Beverage>;
}

@Injectable({
  providedIn: 'root'
})
export class BeverageService implements IGetBeverageById {

  private readonly api = environment.apiRoot;
  private readonly beveragesUrl = `${this.api}/beverages`;

  constructor(
    private http: HttpClient,
  ) {
  }

  getBeverages(): Observable<Beverage[]> {
    return this.http.get<Beverage[]>(this.beveragesUrl);
  }

  getBeverageById(id: number): Observable<Beverage> {
    return this.http.get<Beverage>(`${this.beveragesUrl}/${id}`);
  }

  addBeverage(beverage: Beverage): Observable<void> {
    return this.http.post(this.beveragesUrl, beverage).pipe(
      map(noop)
    );
  }

  addStock(beverage: Beverage, stockToAdd: number): Observable<void> {
    return this.http.patch(`${this.beveragesUrl}/${beverage.id}`, {stockToAdd}).pipe(
      map(noop)
    );
  }

  updatePrice(beverage: Beverage, price: number): Observable<void> {
    return this.http.patch(`${this.beveragesUrl}/${beverage.id}`, {price}).pipe(
      map(noop)
    );
  }

  deleteBeverage(beverage: Beverage): Observable<void> {
    return this.http.delete(`${this.beveragesUrl}/${beverage.id}`).pipe(
      map(noop)
    );
  }

  // Admin dashboard statistics

  getTopBeverages(): Observable<Beverage[]> {
    return this.http.get<Beverage[]>(`${this.api}/stats/top/beverages`);
  }

  getBeverageCount(): Observable<number> {
    return this.http.get<number>(`${this.api}/stats/beverages`);
  }
}
