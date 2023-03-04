import {User} from '../models/user';
import {Observable, shareReplay} from 'rxjs';
import {IGetUserById, UserService} from './user.service';
import {BeverageService, IGetBeverageById} from './beverage.service';
import {Beverage} from '../models/beverage';

export class UserMemoryCache implements IGetUserById {
  private userCache = new Map<number, Observable<User>>();

  constructor(
    private userService: UserService,
  ) {
  }

  getUserById(id: number): Observable<User> {
    if (!this.userCache.has(id)) {
      const user$ = this.userService.getUserById(id).pipe(
        shareReplay(1)
      );
      // Set flag while getting value
      this.userCache.set(id, user$);

      return user$;
    } else {
      return this.userCache.get(id)!;
    }
  }
}

export class BeverageMemoryCache implements IGetBeverageById {
  private beverageCache = new Map<number, Observable<Beverage>>();

  constructor(
    private beverageService: BeverageService,
  ) {
  }

  getBeverageById(id: number): Observable<Beverage> {
    if (!this.beverageCache.has(id)) {
      const beverage$ = this.beverageService.getBeverageById(id).pipe(
        shareReplay(1)
      );
      // Set flag while getting value
      this.beverageCache.set(id, beverage$);

      return beverage$;
    } else {
      return this.beverageCache.get(id)!;
    }
  }
}
