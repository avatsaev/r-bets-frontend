import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import Routes from './app.routing';
import { MaterializeModule } from "angular2-materialize";


import { AppComponent } from './app.component';
import { HomeComponent } from './home'
import { BetComponent } from './bet'
import { ToolbarComponent, FooterComponent } from './shared/layout_components';
import { EmbedBetComponent } from './embed-bet/embed-bet.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { BetsComponent } from './bets/bets.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    BetComponent,
    EmbedBetComponent,
    BetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routes,
    Ng2PageScrollModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
