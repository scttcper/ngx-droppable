import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NtkmeButtonModule } from '@ctrl/ngx-github-buttons';
import { ToastrModule } from 'ngx-toastr';

import { DroppableModule } from '../lib/public_api';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NtkmeButtonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      newestOnTop: false,
    }),
    DroppableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
