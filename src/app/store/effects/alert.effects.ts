import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlertService } from 'ngx-alerts';
import { tap } from 'rxjs/operators';

import * as fromTodoActions from '../../modules/todo/state/todo.actions';
import * as fromAuthActions from '../actions/auth.actions';


@Injectable()
export class AlertEffects {

  TaskCreated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTodoActions.addTodoSuccess),
        tap((action) => this.alertService.success('Task Created'))
      ),
    { dispatch: false }
  );

  TaskUpdated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTodoActions.upsertTodoSuccess),
        tap((action) => this.alertService.success('Task Updated'))
      ),
    { dispatch: false }
  );

  removeTaskFromStore$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromTodoActions.deleteTodo,
        ),
        tap(() =>
          setTimeout(() => {
            this.alertService.warning('Remove Task From Store');
          }, 1000)
        )
      ),
    { dispatch: false }
  );

  TaskDeleted$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTodoActions.deleteTodoSuccess),
        tap(() =>
          setTimeout(() => {
            this.alertService.info('Task removed from Database');
          }, 1000)
        )
      ),
    { dispatch: false }
  );

  // Login Failure
  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.loginFailure,
        ),
        tap(() =>
          setTimeout(() => {
            this.alertService.warning('Unable to login');
          }, 1000)
        )
      ),
    { dispatch: false }
  );

  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap((action) =>
          this.alertService.success(
            'Welcome Back ' + action.user.firstName + ' !'
          )
        )
      ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() => this.alertService.warning('You are logged out'))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private alertService: AlertService) {}

}
