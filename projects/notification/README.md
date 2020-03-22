# Notification

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

![sample](https://github.com/sakshayphanda/Notifications/blob/master/projects/notification/demo.png?raw=true)

# New Features!
  - Bug fixed for close button not showing.
  - Add dynamic Styles to your each of your notifications
  - Support for FontAwesome icons
  Please Note: Font Awesome must be installed in our angular project. Add the following to head tag of index.html.
```sh
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
```
 
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

### Output Variables


| Events | README |
| ------ | ------ |
| (actionPerformed) | Triggered when click is performed on one of the actions |
| (onOpen) | Triggered when the notification widget is initialised|
| (onClose) | Triggered when the close button is clicked|

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
      icon: 'fas fa-exclamation-circle',
      style: {
        background: '#ec5656'
      },
      message: 'No internet',
      buttons: [
      ]
    },
    online: {
      icon: 'fas fa-wifi',
      style: {
        background: '#71b971'
      },
      message: 'Internet is now connected',
      buttons: [ {
        id: 'reload',
        name: 'Reload'
      }
      ]
    },
    basic: {
      style: {
        background: '#6565e8'
      },
      message: 'convert your account to premium because that is necessary for the best experience',
      buttons: [
        {
          id: 'getpro',
          name: 'Get Pro'
        }, {
          id: 'getultra',
          name: 'Get Ultra'
        }
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

## Creator
### Sakshay Phanda

>E-Mail: sakshayphanda03@gmail.com

>LinkedIn: https://www.linkedin.com/in/sakshay-phanda-b5a6977a 

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
