import {ICashTransaction} from './i-cash-transaction';
import {catchError, Observable, of, shareReplay} from 'rxjs';
import {User} from './user';
import {IGetUserById} from '../services/user.service';

export class CashTransaction implements ICashTransaction {

  readonly userFrom$: Observable<User>;
  readonly userTo$: Observable<User>;

  constructor(
    public readonly amount: number,
    public readonly id: number,
    public readonly reason: string,
    public readonly reverted: boolean,
    public readonly timestamp: Date,
    public readonly userFrom: number,
    public readonly userTo: number,
    userFrom$: Observable<User>,
    userTo$: Observable<User>,
    public readonly beverageTxn?: number,
  ) {
    this.userFrom$ = userFrom$.pipe(
      catchError((err) => {
        console.error(err);
        return of({id: -1, name: '[Unkown User]', balance: 0, hidden: 0, deleted: 0} as User);
      }),
      shareReplay(1)
    );
    this.userTo$ = userTo$.pipe(
      catchError((err) => {
        console.error(err);
        return of({id: -1, name: '[Unkown User]', balance: 0, hidden: 0, deleted: 0} as User);
      }),
      shareReplay(1)
    );
  }

  static fromInterface(txn: ICashTransaction, service: IGetUserById): CashTransaction {
    return new CashTransaction(txn.amount, txn.id, txn.reason, txn.reverted, txn.timestamp, txn.userFrom, txn.userTo,
      service.getUserById(txn.userFrom), service.getUserById(txn.userTo), txn.beverageTxn);
  }

  isFresh(): boolean {
    const deadline = new Date(new Date(this.timestamp).getTime() + 30000);
    return deadline > new Date();
  }
}
