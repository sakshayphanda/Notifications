import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification.component';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [NotificationComponent]
})
export class NotificationModule { }
