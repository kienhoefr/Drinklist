import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {noop, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';


export interface IGetUserById {
  getUserById(id: number): Observable<User>;
}

@Injectable({
  providedIn: 'root'
})
export class UserService implements IGetUserById {

  private readonly api = environment.apiRoot;
  private readonly usersUrl = `${this.api}/users`;

  constructor(
    private http: HttpClient,
  ) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  /**
   * @deprecated
   * @param id
   */
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  addUser(name: string): Observable<void> {
    return this.http.post(`${this.usersUrl}/`, {name}).pipe(
      map(noop), // return void
    );
  }

  deleteUser(user: User): Observable<void> {
    return this.http.delete(`${this.usersUrl}/${user.id}`).pipe(
      map(noop), // return void
    );
  }

  toggleVisibility(user: User): Observable<void> {
    return this.http.post(`${this.usersUrl}/${user.id}/${user.hidden ? 'show' : 'hide'}`, '').pipe(
      map(noop), // return void
    );
  }

  // Statistics for admin dashboard

  getTopDebtors(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/stats/top/debtors`);
  }

  getTopSavers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/stats/top/savers`);
  }

  getUserCount(): Observable<number> {
    return this.http.get<number>(`${this.api}/stats/users`);
  }
}
