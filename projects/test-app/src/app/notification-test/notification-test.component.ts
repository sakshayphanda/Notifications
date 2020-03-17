import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification-test',
  templateUrl: './notification-test.component.html',
  styleUrls: ['./notification-test.component.sass']
})
export class NotificationTestComponent implements OnInit {

  @Input('message') message: string;
  @Input('buttons') buttons: [];
  @Input('bgColor') bgColor;
  @Output('btnClicked') btnClicked = new EventEmitter();
  @Output('onClose') onClose = new EventEmitter();
  constructor() { }

  ngOnInit() {
    document.documentElement.style
    .setProperty('--bgColor', this.bgColor);
  }

  buttonClicked(btnId) {
    this.btnClicked.emit(btnId);
  }

  closeButtonClicked() {
    this.onClose.emit(true);
  }

}
