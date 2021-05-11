import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTodo from '../modules/todo/state/todo.reducer';
import * as fromAuth from './reducers/auth.reducer';


export interface AppState {

  [fromTodo.todoesFeatureKey]: fromTodo.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromTodo.todoesFeatureKey]: fromTodo.reducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug] : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  // tslint:disable-next-line:only-arrow-functions
  return function(state, action): any {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
