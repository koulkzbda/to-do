import { EventData } from './../../shared/models/event-data';
import { Injectable } from '@angular/core';
import { filter, Subject, Subscription, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private emitter$ = new Subject<EventData<any>>();

  constructor() { }

  public emit(event: EventData<any>): void {
    this.emitter$.next(event);

  }

  public on(eventName: string, action: ((param: any) => void)): Subscription {
    return this.emitter$.pipe(
      filter(e => e.name === eventName),
      map(e => e['value'])
    ).subscribe(action);
  }
}
