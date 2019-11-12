import { Component } from '@angular/core';

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

export class BetCreateComponent {
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

}


