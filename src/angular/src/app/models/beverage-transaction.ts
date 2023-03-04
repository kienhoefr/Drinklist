import {IBeverageTransaction} from './i-beverage-transaction';
import {catchError, Observable, of, shareReplay} from 'rxjs';
import {User} from './user';
import {Beverage} from './beverage';
import {IGetUserById} from '../services/user.service';
import {IGetBeverageById} from '../services/beverage.service';

export class BeverageTransaction implements IBeverageTransaction {

  readonly user$: Observable<User>;
  readonly beverage$: Observable<Beverage>;

  constructor(
    public beverage: number,
    public id: number,
    public money: number,
    public timestamp: Date,
    public units: number,
    public user: number,
    user$: Observable<User>,
    beverage$: Observable<Beverage>,
    public cashTxn?: number,
  ) {
    this.user$ = user$.pipe(
      catchError((err) => {
        console.error(err);
        return of({id: -1, name: '[Unkown User]', balance: 0, hidden: 0, deleted: 0} as User);
      }),
      shareReplay(1)
    );
    this.beverage$ = beverage$.pipe(
      catchError((err) => {
        console.error(err);
        return of({id: -1, name: '[Unknown Beverage]', stock: 0, price: 0} as Beverage);
      }),
      shareReplay(1)
    );
  }

  static fromInterface(txn: IBeverageTransaction, userService: IGetUserById, beverageService: IGetBeverageById): BeverageTransaction {
    return new BeverageTransaction(txn.beverage, txn.id, txn.money, txn.timestamp, txn.units, txn.user,
      userService.getUserById(txn.user), beverageService.getBeverageById(txn.beverage), txn.cashTxn);
  }

  isFresh(): boolean {
    const deadline = new Date(new Date(this.timestamp).getTime() + 30000);
    return deadline > new Date();
  }
}
