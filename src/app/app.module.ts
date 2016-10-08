import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import Routes from './app.routing';

import { AppComponent } from './app.component';
import {HomeComponent} from './home'
import {BetComponent} from './bet'
import {ToolbarComponent, FooterComponent} from './shared/layout_components';
import {MaterializeDirective} from "angular2-materialize";
import { EmbedBetComponent } from './embed-bet/embed-bet.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    BetComponent,
    MaterializeDirective,
    EmbedBetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
