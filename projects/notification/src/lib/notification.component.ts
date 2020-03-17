import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sp-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {

  @Input('message') message: string;
  @Input('buttons') buttons: [];
  @Input('bgColor') bgColor;
  @Output('actionPerformed') actionPerformed = new EventEmitter();
  @Output('onClose') onClose = new EventEmitter();
  constructor() { }

  ngOnInit() {
    document.documentElement.style
    .setProperty('--bgColor', this.bgColor);
  }

  buttonClicked(btnId) {
    this.actionPerformed.emit(btnId);
  }

  closeButtonClicked() {
    this.onClose.emit(true);
  }
}
