import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../../../models/todo';
import * as TodoActions from './todo.actions';

export const todoesFeatureKey = 'todoes';

export interface State extends EntityState<Todo> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(TodoActions.loadTodosSuccess, (state, action) =>
      adapter.setAll(action.todo, state)
  ),
  on(TodoActions.loadTodoSuccess, TodoActions.addTodoSuccess,
    (state, action) => adapter.addOne(action.todo, state)
  ),
  on(TodoActions.upsertTodoSuccess, (state, action) =>
    adapter.upsertOne(action.todo, state)
  ),
  on(TodoActions.deleteTodo, TodoActions.deleteItemTodo,
    (state, action) => adapter.removeOne(action.todoId, state)
  ),
  on(TodoActions.clearTodos,
    state => adapter.removeAll(state)
  ),
  on(
    TodoActions.upsertTodoFailure,
    TodoActions.loadTodosFailure,
    TodoActions.addTodoFailure,
    TodoActions.loadTodoFailure,
    TodoActions.deleteTodoFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();



/// Reducer
