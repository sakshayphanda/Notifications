import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'sp-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit, OnChanges, AfterViewInit {
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
  ngAfterViewInit() {
    if (this.index > 0) {
      const previousElement: Element = document.getElementsByClassName(
        'notification'
      )[this.index - 1];
      const previousElementStyle = window.getComputedStyle(
        previousElement,
        null
      );
      const height = +previousElementStyle
        .getPropertyValue('height')
        .split('px')[0];
      const top = +previousElementStyle.getPropertyValue('top').split('px')[0];

      const newElement = document.getElementsByClassName('notification')[
        this.index
      ];
      const newTop: number = height + top + 10;
      newElement['style']['top'] = newTop + 'px';
    }
  }

  buttonClicked(btnId) {
    this.actionPerformed.emit(btnId);
  }

  closeButtonClicked() {

    const arrOfElements = document.getElementsByClassName(
      'notification'
    );

    let elementToBeShiftedTo = document.getElementsByClassName(
      'notification')[this.index]['style']['top'];

    for (let index = 0; index < arrOfElements.length; index ++) {
        if (index > this.index) {
            const currentTop = elementToBeShiftedTo;
            elementToBeShiftedTo = arrOfElements[index]['style']['top'];
            arrOfElements[index]['style']['top'] = currentTop;
          }
      }
    this.onClose.emit(true);
  }
}
