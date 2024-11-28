import { createReducer, on } from "@ngrx/store";
import {increment, reduce, reset } from "./items.action";

export const initialState = 0;
export const counterReducer = createReducer(
    initialState,
    on(increment, (state, {add}) => state + add),
    on(reduce, (state) => state - 1),
    on(reset, (state) => state = 0),

    
)