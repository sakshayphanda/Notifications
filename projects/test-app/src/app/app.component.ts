import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  notificationsObj = {
    offline: {
      icon: 'fas fa-exclamation-circle',
      style: {
        background: '#ec5656'
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
      icon: 'fas fa-wifi',
      style: {
        background: '#71b971'
      },
      message: 'Internet is now connected',
      buttons: [
      ]
    },
    basic: {
      style: {
        background: '#6565e8'
      },
      message: 'convert your account to premium because that is necessary for the best experience',
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
  closed(id, n) {
    console.log('closed');
    this.toShow.splice(n, 1);
  }
}
