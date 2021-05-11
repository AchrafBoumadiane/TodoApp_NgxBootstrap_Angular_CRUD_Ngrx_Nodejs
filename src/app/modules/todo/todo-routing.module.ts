import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./list-todo/list-todo.module').then(m => m.ListTodoModule)
  },
  {
    path: 'list/:id',
    loadChildren: () => import('./item-todo/item-todo.module').then(m => m.ItemTodoModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add-todo/add-todo.module').then(m => m.AddTodoModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./update-todo/update-todo.module').then(m => m.UpdateTodoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
