import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todos/todo.service';
import * as TodoActions from './todo.actions';


@Injectable()
export class TodoEffects {

  /****************************************************************** */
  /*****LOAD TODOS FROM API ** */
  /****************************************************************** */
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(TodoActions.loadTodos, TodoActions.loadAdminTodos),
        mergeMap((action) =>
          this.todoService.getAll().pipe(
            map(data => TodoActions.loadTodosSuccess({ todo: data })),
            catchError(error => of(TodoActions.loadTodosFailure({ error }))))
          ),
    );
  });

  /****************************************************************** */
  /*****LOAD TODO API EFFECT ** */
  /****************************************************************** */
  loadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodo, TodoActions.loadAdminTodo),
      mergeMap((action) =>
        this.todoService.get(action.id).pipe(
          map((todo) =>
            TodoActions.loadTodoSuccess({ todo })
          ),
          catchError((error) =>
            of(TodoActions.loadTodoFailure({ error }))
          )
        )
      )
    )
  );

  /****************************************************************** */
  /*****CREATE TODO API EFFECT ** */
  /****************************************************************** */
  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodo),
      mergeMap((action) =>
        this.todoService.create(action.todo).pipe(
          map((todo) =>
            TodoActions.addTodoSuccess({ todo })
          ),
          catchError((error) =>
            of(TodoActions.addTodoFailure({ error }))
          )
        )
      )
    )
  );

  /****************************************************************** */
  /*****UPDATE PRODUCT API EFFECT ** */
  /****************************************************************** */
  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.upsertTodo),
      mergeMap((action) =>
        this.todoService.update(action.todo.id, action.todo).pipe(
          map((todo) => TodoActions.upsertTodoSuccess({ todo })),
          catchError((error) =>
            of(TodoActions.upsertTodoFailure({ error }))
          )
        )
      )
    )
  );

  /****************************************************************** */
  /*****DELETE PRODUCT API EFFECT ** */
  /****************************************************************** */
  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteTodo, TodoActions.deleteItemTodo),
      mergeMap((action) =>
        this.todoService.delete(action.todoId).pipe(
          map(() => TodoActions.deleteTodoSuccess()),
          catchError((error) =>
            of(TodoActions.deleteTodoFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}

}
