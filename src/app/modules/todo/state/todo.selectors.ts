import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as TodoReducer from './todo.reducer';
import * as TodoModel from '../../../models/todo';

export const selectTodoState = createFeatureSelector<TodoReducer.State>(
  TodoReducer.todoesFeatureKey
);

export const selectAllTodos = createSelector(
  selectTodoState,
  TodoReducer.selectAll
);

export const selectAllEntities = createSelector(
  selectTodoState,
  TodoReducer.selectEntities
);


/********************************************************************************* */
/****RETURN TODOS VIEW MODEL */
/********************************************************************************* */

export interface TodosViewModel {
  todos: TodoModel.Todo[];
}

export const selectProductsViewModel = createSelector(
  selectAllTodos,
  (
    todos: TodoModel.Todo[]
  ): TodosViewModel => {
    return {
      todos,
    };
  }
);

export const entityExists = createSelector(
  selectAllEntities,
  (entities, props): boolean => {
    return entities[props.id] === undefined ? false : true;
  }
);

export const selectEntityById = createSelector(
  selectAllEntities,
  (entities, props) => entities[props.id]
);
