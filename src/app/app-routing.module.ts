import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
  {
      path: '',
      component: CoreComponent,
      children: [
        {
          path: 'auth',
          loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
        },
        {
          path: 'about',
          loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
        },
        {
          path: 'welcome',
          loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
        },
        {
          path: 'todo',
          loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule)
        },
        {
          path: '404',
          loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
        },
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'welcome'
        }
      ]
  },
  {
      path: '**',
      pathMatch: 'full',
      redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
