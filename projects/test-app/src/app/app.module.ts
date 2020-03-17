import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotificationModule} from 'sp-notifications';
import { NotificationTestComponent } from './notification-test/notification-test.component';
@NgModule({
  declarations: [
    AppComponent,
    NotificationTestComponent
  ],
  imports: [
    BrowserModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
