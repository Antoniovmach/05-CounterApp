import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment', props<{add: number}>());
export const reduce = createAction('[Counter Component] Reduce');
export const reset = createAction('[Counter Component] Reset');