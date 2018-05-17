import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DroppableModule } from '../lib/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DroppableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
