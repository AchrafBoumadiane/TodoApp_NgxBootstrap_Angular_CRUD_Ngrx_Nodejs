import { Component, OnInit } from '@angular/core';
import { addTodo } from '../state/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Todo } from 'src/app/models/todo';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  submitted = false;
  todoItem: Todo = { id: '', title: '', description: '', completed: false };

  addTaskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    isCompleted: ['yes', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private store: Store<AppState>,
              private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addTaskForm.invalid) {
      return;
    }

    this.todoItem = this.addTaskForm.value;
    this.todoItem.completed = this.addTaskForm.value.isCompleted === 'yes' ? true : false;

    this.store.dispatch(addTodo({ todo: this.todoItem }));
  }

  // convenience getter for easy access to form fields
  get f(): any { return this.addTaskForm.controls; }

}
