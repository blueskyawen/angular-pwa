import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      updates.activateUpdate().then(() => document.location.reload());
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });

    interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate());
  }
}
