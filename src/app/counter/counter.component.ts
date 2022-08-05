import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../state/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(private store: Store<{counter: {counter: 0}}>) { }

  ngOnInit(): void {
    // retriving state data
    console.log(this.store.select('counter'));
    // calling action
    this.store.dispatch(increment())
    // retriving state data
    console.log(this.store.select('counter'));
  
  }

}
