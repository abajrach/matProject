import { assign } from 'lodash';
export class FinancialDetails {

  public static fromJSON(json: any): FinancialDetails {
    const details = new FinancialDetails();
    assign(details, json);

    return details;
  }

  reportDate: Date;
  grossProfit: number;
  costOfRevenue: number;
  operatingRevenue: number;
  totalRevenue: number;
  operatingIncome: number;
  netIncome: number;
  researchAndDevelopment: number;
  operatingExpense: number;
  currentAssets: number;
  totalAssets: number;
  totalLiabilities : number;
  currentCash: number;
  currentDebt: number;
  totalCash: number;
  totalDebt: number;
  shareholderEquity: number;
  cashChange:number;
  cashFlow: number;
  operatingGainsLosses: number;
}
