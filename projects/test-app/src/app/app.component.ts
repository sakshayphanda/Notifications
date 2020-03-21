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
    }, 5000);
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
