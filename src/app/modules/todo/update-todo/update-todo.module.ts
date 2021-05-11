import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateTodoRoutingModule } from './update-todo-routing.module';

import { UpdateTodoComponent } from './update-todo.component';
import { NgxbootstrapModule } from 'src/app/ngxbootstrap/ngxbootstrap.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdateTodoComponent],
  imports: [
    CommonModule,
    UpdateTodoRoutingModule,
    NgxbootstrapModule,
    FormsModule
  ]
})
export class UpdateTodoModule { }
