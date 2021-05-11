import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Todo } from 'src/app/models/todo';
import { AppState } from 'src/app/store';
import * as fromTodoSelectors from '../state/todo.selectors';
import * as fromTodoAction from '../state/todo.actions';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.scss']
})
export class ItemTodoComponent implements OnInit {

  todo$: Observable<Todo>;
  todoId: string;
  isTodoInStore$: Observable<boolean>;

  constructor(
              private router: ActivatedRoute,
              private store: Store<AppState>,
              private ngxBootstrapConfirmService: NgxBootstrapConfirmService
              ) { }

  ngOnInit(): void {
    this.todoId = this.router.snapshot.paramMap.get('id');

    this.isTodoInStore$ = this.store.pipe(
      select(fromTodoSelectors.entityExists, { id: this.todoId })
    );

    this.todo$ = this.isTodoInStore$.pipe(
      mergeMap((isTodoInStore) => {
        if (!isTodoInStore) {
          this.store.dispatch(
            fromTodoAction.loadTodo({ id: this.todoId })
          );
        }

        return this.store.pipe(
          select(fromTodoSelectors.selectEntityById, {
            id: this.todoId,
          })
        );
      })
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
        this.store.dispatch(fromTodoAction.deleteTodo({ todoId: id }));
      } else {
        console.log('Cancel');
      }
    });
  }

}
