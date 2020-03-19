# Notification

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

# New Features!
  - Add dynamic Styles to your each of your notifications
 
# How to install
You can get sp-notifications via npm by either adding it as a new dependency to your package.json file and running npm install, or running the following command:
```sh
npm install sp-notifications
```

### Import the NotificationModule
First of all, make sp-notifications globally available to your Angular application by importing the NotificationModule the your root Angular module. For example:
```sh
import { NotificationModule } from 'sp-notifications';
 
@NgModule({
    imports: [NotificationModule]
})
export class AppModule {}
```

### Input Variables


| Variable | README |
| ------ | ------ |
| [data] | All the content you want to show in the notification  |
| [index] | Index of the particular notification widget|


## Example ##

### HTML ###
```sh
 <ng-container *ngFor="let id of toShow; let i = index">
  <sp-notification [index]="i" 
  [data]="notificationsObj[id]" 
  (actionPerformed)="btnClicked(id, $event)"
  (onClose)="closed(id, i)">
  </sp-notification>
</ng-container>

```

### TS ###

```sh
 toShow = ['online', 'offline'];
```


```sh
notificationsObj = {
    offline: {
      style: {
        background: 'red'
      },
      message: 'No internet',
      buttons: [
        {
          id: 'done',
          name: 'Done'
        }, {
          id: 'reload',
          name: 'Reload'
        }
      ]
    },
    online: {
      style: {
        background: 'green'
      },
      message: 'Internet is now connected',
      buttons: [
      ]
    }
};
```

```sh
btnClicked(id, $event) {
  if($event === 'reload') {
    window.location.reload();
  }
}

closed(id, n) {
    console.log('closed');
    this.toShow.splice(n, 1);
  }
```
### Output Variables


| Events | README |
| ------ | ------ |
| (actionPerformed) | Triggered when click is performed on one of the actions |
| (onOpen) | Triggered when the notification widget is initialised|
| (onClose) | Triggered when the close button is clicked|

## Creator
### Sakshay Phanda

>E-Mail: sakshayphanda03@gmail.com
>LinkedIn: https://www.linkedin.com/in/sakshay-phanda-b5a6977a 

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
