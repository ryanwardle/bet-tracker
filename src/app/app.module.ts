import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BetCreateComponent } from './bet-create/bet-create.component';

import { MatCardModule,
         MatInputModule,
         MatSelectModule,
         MatButtonModule,
         MatToolbarModule,
         MatRadioModule} from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { BetListComponent } from './bet-list/bet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BetCreateComponent,
    BetListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
