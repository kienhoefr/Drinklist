import {IController} from '../../interfaces/controller.interface';
import {Request, Response, Router} from 'express';
import {asyncHandler, requireAdmin} from '../api.util';
import {StatsService} from '../services/stats.service';

export class StatsController implements IController {
  path = '/stats';
  router = Router();

  constructor(
    private statsService: StatsService,
  ) {
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/transactions', requireAdmin, asyncHandler(this.getTransactionCount));
    this.router.get('/users', requireAdmin, asyncHandler(this.getUserCount));
    this.router.get('/beverages', requireAdmin, asyncHandler(this.getBeverageCount));
    this.router.get('/top/beverages', requireAdmin, asyncHandler(this.getTopBeverages));
    this.router.get('/top/savers', requireAdmin, asyncHandler(this.getTopSavers));
    this.router.get('/top/debtors', requireAdmin, asyncHandler(this.getTopDebtors));
  }

  private getTransactionCount = async (req: Request, res: Response) => {
    let kind = req.query.kind;
    if (kind === undefined) {
      kind = 'cash';
    } else if (!(kind === 'cash' || kind === 'beverage' || kind === 'both')) {
      res.status(400).send('Invalid parameter: kind');
      return;
    }
    const orderCount = await this.statsService.getTransactionCount(kind);
    res.status(200).json(orderCount);
  };

  private getUserCount = async (req: Request, res: Response) => {
    const userCount = await this.statsService.getUserCount();
    res.status(200).json(userCount);
  };

  private getBeverageCount = async (req: Request, res: Response) => {
    const beverageCount = await this.statsService.getBeverageCount();
    res.status(200).json(beverageCount);
  };

  private getTopBeverages = async (req: Request, res: Response) => {
    const topBeverages = await this.statsService.getTopBeverages();
    res.status(200).json(topBeverages);
  };

  private getTopSavers = async (req: Request, res: Response) => {
    const topSavers = await this.statsService.getTopSavers();
    res.status(200).json(topSavers);
  };

  private getTopDebtors = async (req: Request, res: Response) => {
    const topDebtors = await this.statsService.getTopDebtors();
    res.status(200).json(topDebtors);
  };
}
