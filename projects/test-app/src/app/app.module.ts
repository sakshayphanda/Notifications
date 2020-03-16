import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotificationModule} from 'sp-notifications';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
