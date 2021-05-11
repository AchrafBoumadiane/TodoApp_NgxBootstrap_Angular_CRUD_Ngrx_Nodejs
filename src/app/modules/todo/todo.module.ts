import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './state/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todo.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature(fromTodo.todoesFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoModule { }
