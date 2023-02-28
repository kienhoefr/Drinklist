import {DbService} from '../../services/api/db.service';
import {Beverage} from '../../models/api/beverage';
import {User} from '../../models/api/user';

export class StatsService {
  constructor(
    private dbService: DbService,
  ) {
  }

  async getTransactionCount(kind: string): Promise<number> {
    const cashSql = await this.dbService.prepare('SELECT COUNT(*) AS count FROM cash_transactions;');
    const beverageSql = await this.dbService.prepare('SELECT COUNT(*) AS count FROM beverage_transactions;');
    let count = 0;
    try {
      if (kind === 'cash' || kind === 'both') {
        count += (await cashSql.get<{ count: number }>())?.count ?? 0;
      }
      if (kind === 'beverage' || kind === 'both') {
        count += (await beverageSql.get<{ count: number }>())?.count ?? 0;
      }
    } finally {
      await cashSql.reset();
      await beverageSql.reset();
    }
    return count;
  }

  async getUserCount(): Promise<number> {
    const sql = await this.dbService.prepare('SELECT COUNT(*) AS count FROM users WHERE deleted = 0;');
    return sql.get<{ count: number }>()
      .then(result => result ? result.count : -1)
      .finally(() => sql.reset());
  }

  async getBeverageCount(): Promise<number> {
    const sql = await this.dbService.prepare('SELECT COUNT(*) AS count FROM beverages WHERE deleted = 0;');
    return sql.get<{ count: number }>()
      .then(result => result ? result.count : -1)
      .finally(() => sql.reset());
  }

  async getTopBeverages(): Promise<(Beverage & { count: number })[]> {
    const sql = await this.dbService.prepare('SELECT * FROM topBeverages LIMIT 5;');
    return sql.all();
  }

  async getTopSavers(): Promise<User[]> {
    const sql = await this.dbService.prepare('SELECT * FROM users WHERE id > 0 AND deleted = 0 ORDER BY balance DESC LIMIT 5;');
    return sql.all();
  }

  async getTopDebtors(): Promise<User[]> {
    const sql = await this.dbService.prepare('SELECT * FROM users WHERE id > 0 AND deleted = 0 ORDER BY balance ASC LIMIT 5;');
    return sql.all();
  }
}
