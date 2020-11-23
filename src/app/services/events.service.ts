/**
* Service que publica alterações nas variáveis de outros scripts
*    Fonte: https://medium.com/wizpanda/dealing-with-breaking-change-in-ionic-5-db3ba711dfcd
*
* @author Shashank Agrawal
*/

import { Injectable } from '@angular/core';

// 3.1) Importa dependências necessárias
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private channels: { [key: string]: Subject<any>; } = {};

  // 3.2) Lê alterações em outros scripts
  subscribe(topic: string, observer: (_: any) => void): Subscription {
    if (!this.channels[topic]) {
      this.channels[topic] = new Subject<any>();
    }
    return this.channels[topic].subscribe(observer);
  }

  // 3.3) Salva alterações para outros scripts
  publish(topic: string, data?: any): void {
    const subject = this.channels[topic];
    if (!subject) {
      return;
    }
    subject.next(data);
  }

  // 3.4) Destroi alterações entre scripts
  destroy(topic: string): null {
    const subject = this.channels[topic];
    if (!subject) {
      return;
    }
    subject.complete();
    delete this.channels[topic];
  }
}