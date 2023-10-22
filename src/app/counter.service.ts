import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  counter : number =0;
  getCounter(): number {
    return this.counter;
  }

  incrementCounter(): void {
    this.counter++;
  }
}
