import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
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
    },
    basic: {
      style: {
        background: 'blue'
      },
      message: 'convert your account to premium',
      buttons: [
        {
          id: 'convert',
          name: 'Convert'
        }, {
          id: 'reload',
          name: 'Reload'
        }
      ]
    }
  };

  toShow = [];



  ngOnInit() {
    setTimeout(()=> {
      this.toShow.push('offline');
    }, 1000);
    setTimeout(()=> {
      this.toShow.push('online');
    }, 4000);
    setTimeout(()=> {
      this.toShow.push('basic');
    }, 2000);
  }
  btnClicked($event) {
    if($event === 'reload') {
      window.location.reload();
    }
  }
  closed(n) {
    console.log('closed');
    this.toShow.splice(n, 1);
  }
}
