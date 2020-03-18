import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'sp-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit, OnChanges {
  @Input('data') data: object;
  @Input('index') index: number;
  @Output('actionPerformed') actionPerformed = new EventEmitter();
  @Output('onClose') onClose = new EventEmitter();
  @Output('onOpen') onOpen = new EventEmitter();


  constructor() {}
  ngOnInit() {
    this.checkRequiredFields(this.data);
    this.onOpen.emit(true);
  }

  ngOnChanges(changes) {
    this.checkRequiredFields(this.data);
  }

  checkRequiredFields(input) {
    if (input === null) {
      throw new Error('Attribute *data* is required');
    }
  }

  buttonClicked(btnId) {
    this.actionPerformed.emit(btnId);
  }

  closeButtonClicked() {
    this.onClose.emit(true);
  }
}
