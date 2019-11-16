import { Component, OnInit } from '@angular/core';
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

   constructor(private betService: BetService) {}

   ngOnInit() {
    this.form = new FormGroup({
      amount: new FormControl(null),
      odds: new FormControl(null),
      type: new FormControl(null),
      sport: new FormControl(null),
      result: new FormControl(null),
      notes: new FormControl(null)
    });
   }

   onSubmitBet() {

    this.form = new FormGroup({
      amount: new FormControl(this.form.controls.amount.value),
      odds: new FormControl(this.form.controls.odds.value),
      type: new FormControl(this.form.controls.type.value),
      sport: new FormControl(this.form.controls.sport.value),
      result: new FormControl(this.form.controls.result.value),
      notes: new FormControl(this.form.controls.notes.value)
    });
    console.log(this.form.value);
    this.betService.addBet(this.form.value);
    this.form.reset();
   }
}


