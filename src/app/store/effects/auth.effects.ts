import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth/auth.service';



@Injectable()
export class AuthEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginPage),
      concatMap((action) =>
        this.authService.login(action).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.signupPage),
      concatMap((action) =>
        this.authService.signup(action).pipe(
          map((user) => AuthActions.signupSuccess({ user })),
          catchError((error) => of(AuthActions.signupFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}

}
