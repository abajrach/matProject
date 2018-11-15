export class Company {

  symbol: string;
  companyName: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  CEO: string;
  issueType: string;
  sector: string;
  tags: string[];
  nameAndSymbol: string = `${this.companyName}(${this.symbol})`;
}
