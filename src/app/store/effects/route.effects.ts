import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import * as fromTodoActions from '../../modules/todo/state/todo.actions';
import * as fromAuthActions from '../actions/auth.actions';
import { tap } from 'rxjs/operators';



@Injectable()
export class RouteEffects {

  goTaskList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromTodoActions.addTodoSuccess,
          fromTodoActions.upsertTodoSuccess,
          fromTodoActions.deleteTodoSuccess
        ),
        tap(() => this.route.navigate(['/todo/list']))
      ),
    { dispatch: false }
  );

  goTaskListAfterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.loginSuccess
        ),
        tap(() => this.route.navigate(['/todo/list']))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private route: Router) {}

}
