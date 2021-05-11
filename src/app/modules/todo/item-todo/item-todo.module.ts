import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemTodoRoutingModule } from './item-todo-routing.module';
import { ItemTodoComponent } from './item-todo.component';
import { NgxbootstrapModule } from 'src/app/ngxbootstrap/ngxbootstrap.module';


@NgModule({
  declarations: [ItemTodoComponent],
  imports: [
    CommonModule,
    ItemTodoRoutingModule,
    NgxbootstrapModule
  ]
})
export class ItemTodoModule { }
