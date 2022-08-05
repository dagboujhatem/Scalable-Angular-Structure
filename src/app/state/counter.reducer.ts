import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import * as CountActions from './counter.actions';
import { initialState } from './counter.state';

export const counterReducer = createReducer(initialState, 
on(CountActions.increment, (state) => {
    return {
        ...state,
        counter: state.counter + 1
    }
}),
// on(CountActions.decrement, (state) => {
//     ...state,
//     counter: state.counter - 1
// }),
// on(CountActions.reset, (state) => {
//     ...state,
//     counter: 0
// })

);