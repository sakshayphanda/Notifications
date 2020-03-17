import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'This is  message text';
  open = true;
  buttons = [
    {
      id: 'done',
      name: 'Done'
    }, {
      id: 'cancel',
      name: 'Cancel'
    }
  ];


  btnClicked($event) {
    console.log($event);
  }
  closed() {
    console.log('closed');
    this.open = false;
  }
}
