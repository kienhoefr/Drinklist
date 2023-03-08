import {Component, OnInit} from '@angular/core';
import {faHistory, faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import {TransactionsService} from '../../services/transactions.service';
import {CashTransaction} from '../../models/cash-transaction';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-admin-cash-transaction',
  template: `
    <div class="container-fluid">
      <h1>
        <fa-icon [icon]="icons.moneyBill"></fa-icon>
        Cash Transactions
      </h1>
      <app-admin-cash-transaction-table [transactions]="transactions" [refresh]="refresh"></app-admin-cash-transaction-table>
      <div class="d-flex justify-content-center">
        <ngb-pagination [collectionSize]="txnCount" [pageSize]="15" [(page)]="page" (pageChange)="loadTransactions()"
                        [rotate]="true" [maxSize]="5"></ngb-pagination>
      </div>
    </div>
  `,
  styles: []
})
export class AdminCashTransactionComponent implements OnInit {

  transactions: CashTransaction[] = [];
  txnCount = 0;
  page = 1;

  // FontAwesome icons
  icons = {
    history: faHistory,
    moneyBill: faMoneyBill
  };

  constructor(
    private txnService: TransactionsService,
  ) {
  }

  ngOnInit(): void {
    this.loadTransactions();
  }

  refresh = () => {
    this.loadTransactions();
  };

  loadTransactions(): void {
    combineLatest({
      txns: this.txnService.getCashTxns({limit: 15, offset: (this.page - 1) * 15}, true),
      count: this.txnService.getCashTransactionCount(),
    }).subscribe({
      next: (({txns, count}) => {
        this.txnCount = count;
        this.transactions = txns;
      })
    });
  }

}
