import { Component, OnInit, ViewChild } from '@angular/core';
import { Bet } from '../bet.model';
import { BetService } from '../bet.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.scss']
})

export class BetListComponent implements OnInit {

  bets: Bet[] = [];
  dataSource;
  displayedColumns: string[] = ['amount', 'odds', 'type', 'sport', 'result', 'notes', 'total'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private betService: BetService) {}

  ngOnInit() {
    this.bets = this.betService.getBets();
    this.dataSource = new MatTableDataSource(this.bets);
    this.dataSource.sort = this.sort;
  }

}

