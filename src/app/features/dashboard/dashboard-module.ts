import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Dashboard } from './dashboard';
import { Users } from './childrens/users/users';
import { Productos } from './childrens/productos/productos';

@NgModule({
  declarations: [Dashboard, Users, Productos],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
