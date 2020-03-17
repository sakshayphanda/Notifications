import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification-test',
  templateUrl: './notification-test.component.html',
  styleUrls: ['./notification-test.component.sass']
})
export class NotificationTestComponent implements OnInit {

  @Input('data') data: object;
  @Input('index') index: number;
  @Input('buttons') buttons: [];
  @Input('style') style;
  @Output('actionPerformed') actionPerformed = new EventEmitter();
  @Output('onClose') onClose = new EventEmitter();
  constructor() { }

  // ngOnInit() {
  //   // document.documentElement.style
  //   // .setProperty('--bgColor', this.bgColor);

  //   // document.querySelector('.notification')['style'].top = `${this.index   * 40}px`;
  // }
  ngOnInit() {
    this.checkRequiredFields(this.data);
 }

 ngOnChanges(changes) {
    this.checkRequiredFields(this.data);
 }

 checkRequiredFields(input) {
    if(input === null) {
       throw new Error("Attribute 'data' is required");
    }
 }

  buttonClicked(btnId) {
    this.actionPerformed.emit(btnId);
  }

  closeButtonClicked() {
    this.onClose.emit(true);
  }

}
