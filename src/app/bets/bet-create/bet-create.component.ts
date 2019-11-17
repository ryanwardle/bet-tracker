import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BetService } from '../bet.service';

// INTERFACES FOR FORM OPTIONS
export interface BetType {
  value: string;
  viewValue: string;
}

export interface Sport {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-bet-create',
  templateUrl: './bet-create.component.html',
  styleUrls: ['./bet-create.component.scss']
})

export class BetCreateComponent implements OnInit {

  // FORM OPTIONS FOR BETTYPES AND SPORTS
   betTypes: BetType[] = [
     {value: 'straight', viewValue: 'Straight'},
     {value: 'parlay', viewValue: 'Parlay'}
   ];

   sports: Sport[] = [
     {value: 'baseball', viewValue: 'Baseball'},
     {value: 'basketball', viewValue: 'Basketball'},
     {value: 'football', viewValue: 'Football'},
     {value: 'hockey', viewValue: 'Hockey'},
     {value: 'soccer', viewValue: 'Soccer'},
     {value: 'tennis', viewValue: 'Tennis'}
   ];

   form: FormGroup;
   betAmount: number;
   oddsAmount: number;
   result: string;
   winOrLoss: number;

  //  NEED TO FIGURE OUT HOW TO RESET CALCULATED AMOUNT ON FORM SUBMISSION
  //  @ViewChild('calculatedAmount', null) calculatedAmount: TemplateRef<any>;

   constructor(private betService: BetService) {}

   ngOnInit() {
    this.form = new FormGroup({
      amount: new FormControl(null),
      odds: new FormControl(null),
      type: new FormControl(null),
      sport: new FormControl(null),
      result: new FormControl(null),
      notes: new FormControl(null),
      total: new FormControl(null)
    });
   }

   onSubmitBet() {

    this.form = new FormGroup({
      amount: new FormControl(this.form.controls.amount.value),
      odds: new FormControl(this.form.controls.odds.value),
      type: new FormControl(this.form.controls.type.value),
      sport: new FormControl(this.form.controls.sport.value),
      result: new FormControl(this.form.controls.result.value),
      notes: new FormControl(this.form.controls.notes.value),
      total: new FormControl(this.winOrLoss)
    });
    this.betService.addBet(this.form.value);
    // console.log(this.calculatedAmount);
    this.form.reset();
   }

   calculateAmount(amount: number, odds: number, result: string) {

      if (result === 'push') { return `You pushed!`; }

      if (result === 'loss') {
        return `You're loss amount is $${amount}`;
      } else {
        if (odds > 0) {
        this.winOrLoss = (amount * odds) / 100;
        return `You're win total is $${this.winOrLoss}`;
      } else {
        this.winOrLoss = ((100 / odds * -1) * amount);
        return `You're win total is ${this.winOrLoss.toFixed(2)}`;
      }
    }
  }
}


