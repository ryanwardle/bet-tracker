import { Component, OnInit } from '@angular/core';
import { Bet } from '../bet.model';
import { BetService } from '../bet.service';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.scss']
})

export class BetListComponent implements OnInit {

  bets: Bet[] = [];

  constructor(private betService: BetService) {}

  ngOnInit() {
    this.bets = this.betService.getBets();
    console.log(this.bets);
  }

}

