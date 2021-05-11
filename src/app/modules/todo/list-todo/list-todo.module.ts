import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTodoRoutingModule } from './list-todo-routing.module';
import { ListTodoComponent } from './list-todo.component';
import { NgxbootstrapModule } from 'src/app/ngxbootstrap/ngxbootstrap.module';


@NgModule({
  declarations: [ListTodoComponent],
  imports: [
    CommonModule,
    ListTodoRoutingModule,
    NgxbootstrapModule
  ]
})
export class ListTodoModule { }
