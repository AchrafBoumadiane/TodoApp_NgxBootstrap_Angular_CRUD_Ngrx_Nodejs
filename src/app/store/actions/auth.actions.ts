import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const loginPage = createAction(
  '[Login Component] Login User',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth Effect] Login User Failure',
  props<{ error: any }>()
);

export const signupPage = createAction(
  '[Signup Component] Signup User',
  props<{ firstname: string; lastname: string; username: string; isadmin: string; email: string; password: string }>()
);

export const signupSuccess = createAction(
  '[Signup Effect] Signup User Success',
  props<{ user: User }>()
);

export const signupFailure = createAction(
  '[Signup Effect] Signup User Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth Header Component] Logout User');

export const browserReload = createAction(
  '[Core Component] Browser Reload',
   props<{ user: User }>()
);
