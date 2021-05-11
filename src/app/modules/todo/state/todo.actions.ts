import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from '../../../models/todo';


// ************* LOAD TODOS ************//
export const loadTodos = createAction(
  '[Todo Component] Load Todos',
  props<{ load: string }>()
);

export const loadAdminTodos = createAction(
  '[Todo List Component] Load Todos',
  props<{ todo: Todo[] }>()
);

export const loadTodosSuccess = createAction(
  '[Todo Effect] Load Todos Success',
  props<{ todo: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo Effect] Load Todos Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****LOAD INDIVIDUAL TODO ** */
/****************************************************************** */

export const loadTodo = createAction(
  '[Todo View Component] Load Todo',
  props<{ id: string }>()
);

export const loadAdminTodo = createAction(
  '[Todo Item Component] Load Todo',
  props<{ id: string }>()
);

export const loadTodoSuccess = createAction(
  '[Todo Effect] Load Todo Success',
  props<{ todo: Todo }>()
);

export const loadTodoFailure = createAction(
  '[Todo Effect] Load Todo Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****ADD INDIVIDUAL PRODUCT ** */
/****************************************************************** */

export const addTodo = createAction(
  '[Todo Add Component] Add Todo',
  props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(
  '[Todo Effect] Add Todo Success',
  props<{ todo: Todo }>()
);

export const addTodoFailure = createAction(
  '[Todo Effect] Add Todo Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****UPDATE INDIVIDUAL TODO ** */
/****************************************************************** */
export const upsertTodo = createAction(
  '[Todo Edit Component] Upsert Todo',
  props<{ todo: Todo }>()
);
export const upsertTodoSuccess = createAction(
  '[Todo Effect] Upsert Todo Success',
  props<{ todo: Todo }>()
);
export const upsertTodoFailure = createAction(
  '[Todo Effect] Upsert Todo failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****DELETE INDIVIDUAL TODO ** */
/****************************************************************** */

export const deleteItemTodo = createAction(
  '[Todo Item Component] Delete Todo',
  props<{ todoId: string }>()
);

export const deleteTodo = createAction(
  '[Todo List Component] Delete Todo',
  props<{ todoId: string }>()
);

export const deleteTodoSuccess = createAction(
  '[Todo Effect] Delete Todo Success'
);
export const deleteTodoFailure = createAction(
  '[Todo Effect] Delete Todo Failure',
  props<{ error: any }>()
);



export const clearTodos = createAction(
  '[Todo/API] Clear Todos'
);
