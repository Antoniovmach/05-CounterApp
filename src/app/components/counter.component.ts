import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, reduce, reset } from '../store/items.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',

})
export class CounterComponent {
title: string = 'usando redux para manejar el estado'
counter: number =0;

constructor(private store: Store<{counter:number}>){
  // this.counter=0;
  this.store.select('counter').subscribe(counter=> {
    this.counter= counter;
  })
}

increment(){
  console.log('incrmenetando')
  // this.counter++
  this.store.dispatch(increment({add:3}));

}
reduce(){
  console.log('reduciendo')
  // this.counter--
  this.store.dispatch(reduce());
}

reset(){
  console.log('reseteado')
  // this.counter= 0
  this.store.dispatch(reset());
  
}
}
