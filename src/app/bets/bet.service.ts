import { Injectable } from '@angular/core';
import { Bet } from './bet.model';

@Injectable({providedIn: 'root'})
export class BetService {
  private bets: Bet[];

  getBets() {
    return this.bets;
  }

  addBet(bet: Bet) {
    this.bets.push(bet);
    return this.bets;
  }

}
