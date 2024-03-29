import {Component, OnInit} from '@angular/core';
import {faBeer, faMoneyBill, faUsers} from '@fortawesome/free-solid-svg-icons';
import {UserService} from '../../services/user.service';
import {BeverageService} from '../../services/beverage.service';
import {TransactionsService} from '../../services/transactions.service';

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <h1>Admin Dashboard</h1>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div class="col mb-4">
        <app-admin-stat-counter title="Total Users" [icon]="icons.users" [count]="userCount !== undefined ? userCount : -1"
                                counted="users"></app-admin-stat-counter>
      </div>
      <div class="col mb-4">
        <app-admin-stat-counter title="Total Beverages" [icon]="icons.beer" [count]="beverageCount !== undefined ? beverageCount : -1"
                                counted="beverages"></app-admin-stat-counter>
      </div>
      <div class="col mb-4">
        <app-admin-stat-counter title="Total Transactions" [icon]="icons.moneyBill" [count]="orderCount !== undefined ? orderCount : -1"
                                counted="transactions"></app-admin-stat-counter>
      </div>
      <div class="col mb-4">
        <app-admin-stat-beverage-toplist></app-admin-stat-beverage-toplist>
      </div>
      <div class="col mb-4">
        <app-admin-stat-user-toplist></app-admin-stat-user-toplist>
      </div>
      <div class="col mb-4">
        <app-admin-stat-user-toplist [debt]="true"></app-admin-stat-user-toplist>
      </div>
    </div>
  `,
  styles: []
})
export class AdminDashboardComponent implements OnInit {

  userCount: number | undefined;
  beverageCount: number | undefined;
  orderCount: number | undefined;

  // FontAwesome icons
  icons = {
    users: faUsers,
    beer: faBeer,
    moneyBill: faMoneyBill,
  };

  constructor(
    private userService: UserService,
    private beverageService: BeverageService,
    private txnService: TransactionsService,
  ) {
  }

  ngOnInit(): void {
    this.userService.getUserCount().subscribe({
      next: count => {
        this.userCount = count;
      }
    });

    this.beverageService.getBeverageCount().subscribe({
      next: count => {
        this.beverageCount = count;
      }
    });

    this.txnService.getCashTransactionCount().subscribe({
      next: count => {
        this.orderCount = count;
      }
    });
  }
}
