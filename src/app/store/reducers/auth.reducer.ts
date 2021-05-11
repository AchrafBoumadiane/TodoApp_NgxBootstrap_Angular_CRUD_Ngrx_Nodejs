import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: User;
  error: any;
}

export const initialState: State = {
  user: {
    id: null,
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    password: null,
    isadmin: null,
  },
  error: null
};


export const reducer = createReducer(
  initialState,

  on(AuthActions.loginSuccess, AuthActions.signupSuccess, AuthActions.browserReload, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),
  on(AuthActions.loginFailure, AuthActions.signupFailure, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        firstName: null,
        lastName: null,
        userName: null,
        email: null,
        password: null,
        isadmin: null,
      },
      error: action.error,
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        firstName: null,
        lastName: null,
        userName: null,
        email: null,
        password: null,
        isadmin: null,
      },
      error: null,
    };
  }),

);

