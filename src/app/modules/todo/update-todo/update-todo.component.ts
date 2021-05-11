import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TodoService } from 'src/app/services/todos/todo.service';
import { AppState } from 'src/app/store';
import * as fromTodoActions from '../state/todo.actions';
@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss']
})
export class UpdateTodoComponent implements OnInit {

  model: any = {};

  constructor(private service: TodoService, private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.service
      .get(this.route.snapshot.paramMap.get('id'))
      .subscribe((todo) => (this.model = todo));
  }

  saveTodo(): void {
    this.store.dispatch(fromTodoActions.upsertTodo({todo : this.model}));
  }

}
