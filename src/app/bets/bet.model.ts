
// NEED TO ADD TOTAL WIN OR LOSS AMOUNT, NEED TO ADJUST BET MODEL AND MAYBE CALCUTE ON FORM
// MAYBE ALSO ADD DATE?

export interface Bet {
  amount: string;
  odds: string;
  type: string;
  sport: string;
  result: string;
  notes: string;
  total: number;
}

