import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  counter: number =0;
  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.incrementCounter();
    this.counter = this.counterService.getCounter(); 
  }
  }

