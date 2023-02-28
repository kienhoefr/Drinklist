import {Component, OnInit} from '@angular/core';
import {faHistory} from '@fortawesome/free-solid-svg-icons';
import {BeverageTransaction} from '../../models/beverage-transaction';
import {TransactionsService} from '../../services/transactions.service';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-admin-beverage-transaction',
  template: `
    <div class="container-fluid">
      <h1>
        <fa-icon [icon]="icons.history"></fa-icon>
        Beverage Transactions
      </h1>
      <app-admin-beverage-transaction-table [transacations]="transactions" [refresh]="refresh"></app-admin-beverage-transaction-table>
      <div class="d-flex justify-content-center">
        <ngb-pagination [collectionSize]="txnCount" [pageSize]="15" [(page)]="page" (pageChange)="loadOrders()"
                        [rotate]="true" [maxSize]="5"></ngb-pagination>
      </div>
    </div>
  `,
  styles: []
})
export class AdminBeverageTransactionComponent implements OnInit {

  transactions: BeverageTransaction[] = [];
  txnCount = 0;
  page = 1;

  // FontAwesome icons
  icons = {
    history: faHistory,
  };

  constructor(
    private txnService: TransactionsService,
  ) {
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  refresh = () => {
    this.loadOrders();
  };

  loadOrders(): void {
    combineLatest({
      txns: this.txnService.getBeverageTxns({limit: 15, offset: (this.page - 1) * 15}),
      count: this.txnService.getBeverageTransactionCount(),
    }).subscribe({
      next: (({txns, count}) => {
        this.txnCount = count;
        this.transactions = txns;
      })
    });
  }

}
