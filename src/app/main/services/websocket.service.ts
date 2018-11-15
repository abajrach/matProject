import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import * as io from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket; // socket that connects to socket.io server
  private url: string = 'https://ws-api.iextrading.com/1.0/tops';

  constructor() { }

  connect(): Subject<MessageEvent> {
    this.socket = io(this.url);

    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        console.log("Received a message from websocket server");
        observer.next(data);
      })
      return () => {
        this.socket.disconnect();
      }
    })

    let observer = {
      next: (data: Object) => {
        this.socket.emit('message', JSON.stringify(data));
      }
    };
    return Subject.create(observer, observable);
  }
}
