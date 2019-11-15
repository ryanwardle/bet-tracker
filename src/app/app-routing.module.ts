import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BetCreateComponent } from './bets/bet-create/bet-create.component';
import { BetListComponent } from './bets/bet-list/bet-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'new-bet', component: BetCreateComponent},
  {path: 'bet-list', component: BetListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
