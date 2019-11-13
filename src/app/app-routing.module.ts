import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BetCreateComponent } from './bet-create/bet-create.component';
import { BetListComponent } from './bet-list/bet-list.component';


const routes: Routes = [
  {path: 'new-bet', component: BetCreateComponent},
  {path: 'bet-list', component: BetListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
