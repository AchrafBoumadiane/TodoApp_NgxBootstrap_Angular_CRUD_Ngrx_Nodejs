import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/store';

import * as fromTodoAction from '../state/todo.actions';
import * as TodoSelector from '../state/todo.selectors';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  todos: any;
  user: User;
  td$: Observable<TodoSelector.TodosViewModel>;

  p = 1;

  constructor(private store: Store<AppState>, private ngxBootstrapConfirmService: NgxBootstrapConfirmService) { }

  ngOnInit(): void {
    this.store.dispatch(fromTodoAction.loadTodos({ load: 'test' }));
    this.td$ = this.store.pipe(
      select(TodoSelector.selectProductsViewModel)
    );
  }

  deleteTodo(id: string): void {
    const options = {
      title: 'Sure you want to delete this Task?',
      confirmLabel: 'Okay',
      declineLabel: 'Cancel'
    };
    this.ngxBootstrapConfirmService.confirm(options).then((res: boolean) => {
      if (res) {
        console.log('Okay');
        this.store.dispatch(fromTodoAction.deleteTodo({ todoId: id }));
      } else {
        console.log('Cancel');
      }
    });
  }

}
