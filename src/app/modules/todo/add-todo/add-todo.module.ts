import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTodoRoutingModule } from './add-todo-routing.module';
import { AddTodoComponent } from './add-todo.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxbootstrapModule } from 'src/app/ngxbootstrap/ngxbootstrap.module';

@NgModule({
  declarations: [AddTodoComponent],
  imports: [
    CommonModule,
    AddTodoRoutingModule,
    ReactiveFormsModule,
    NgxbootstrapModule
  ]
})
export class AddTodoModule { }
