import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/buttons/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    RoomListComponent,
    AdvantagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
