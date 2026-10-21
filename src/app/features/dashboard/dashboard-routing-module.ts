import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard';
import { Users } from './childrens/users/users';
import { Productos } from './childrens/productos/productos';

const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: 'user', component: Users },
      { path: 'productos', component: Productos },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
