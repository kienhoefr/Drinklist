import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../app.config';
import {AuthService} from './auth.service';
import {handleError, handleForbiddenAdmin, handleForbiddenUser, ServiceUtil, toApiResponse} from './service.util';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ApiResponse} from '../models/api-response';
import {Beverage} from '../models/beverage';

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  private readonly api = AppConfig.config.api;
  private serviceUtil: ServiceUtil;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) {
    this.serviceUtil = new ServiceUtil(auth);
  }

  getBeverages(): Observable<ApiResponse<Beverage[]>> {
    return this.http.get<Beverage[]>(`${this.api}/beverages`, {observe: 'response', headers: this.serviceUtil.getTokenHeaders('user')})
      .pipe(
        toApiResponse<Beverage[]>(),
        catchError(handleError<Beverage[]>()),
        handleForbiddenUser(this.auth),
      );
  }

  // Admin dashboard statistics

  getTopBeverages(): Observable<ApiResponse<Beverage[]>> {
    return this.http.get<Beverage[]>(`${this.api}/stats/top/beverages`, {
      observe: 'response',
      headers: this.serviceUtil.getTokenHeaders('admin')
    }).pipe(
      toApiResponse<Beverage[]>(),
      catchError(handleError<Beverage[]>()),
      handleForbiddenAdmin(this.auth),
    );
  }

  getBeverageCount(): Observable<ApiResponse<number>> {
    return this.http.get<number>(`${this.api}/stats/beverages`, {observe: 'response', headers: this.serviceUtil.getTokenHeaders('admin')})
      .pipe(
        toApiResponse<number>(),
        catchError(handleError<number>()),
        handleForbiddenAdmin(this.auth),
      );
  }
}
