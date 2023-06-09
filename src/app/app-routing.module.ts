import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './users/create/create.component';
import { ViewComponent } from './users/view/view.component';



const routes: Routes = [
  { path: '', redirectTo: '/users/create', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
