import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';

import { tap } from 'rxjs/operators';
import * as fromTodoActions from '../../modules/todo/state/todo.actions';


@Injectable()
export class SpinnerEffects {

  spinneron$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromTodoActions.addTodo,
          fromTodoActions.upsertTodo
        ),
        tap(() => this.spinner.show())
      ),
    { dispatch: false }
  );

  spinneroff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromTodoActions.addTodoSuccess,
          fromTodoActions.upsertTodoSuccess,
          fromTodoActions.addTodoFailure
        ),
        tap(() => {
          setTimeout(() => {
            this.spinner.hide();
          }, 1000);
        })
      ),
    { dispatch: false }
  );



  constructor(private actions$: Actions, private spinner: NgxSpinnerService) {}

}
