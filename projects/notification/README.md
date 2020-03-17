# Notification

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

# New Features!

  - Add backgroud color to your widget
  
### Input Variables


| Variable | README |
| ------ | ------ |
| [data: object] | All the content you want to show in the notification  |
| [index: number] | Index of the particular notification |


Example: 
--HTML--
<ng-container *ngFor="let id of toShow; let i = index">
  <sp-notification [index]="i" [data]="notificationsObj[id]" (actionPerformed)="btnClicked($event)"
    (onClose)="closed(i)">
  </sp-notification>
</ng-container>

--TS--
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

  toShow = ['Online'];


### Output Variables


| Variable | README |
| ------ | ------ |
| (actionPerformed) | When click is performed on one of the actions |
| (onClose) | Triggered when the close button is clicked|

## Code scaffolding

Run `ng generate component component-name --project notification` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project notification`.
> Note: Don't forget to add `--project notification` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build notification` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build notification`, go to the dist folder `cd dist/notification` and run `npm publish`.

## Running unit tests

Run `ng test notification` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
