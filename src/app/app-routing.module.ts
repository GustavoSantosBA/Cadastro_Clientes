import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { AdminModule } from './layout/admin/admin.module';
import { AuthModule } from './layout/auth/auth.module';

const routes: Routes = [
  { path: '', component: AdminComponent, loadChildren: () => import('./layout/admin/admin.module').then(m => AdminModule) },
  { path: '', component: AuthComponent, loadChildren: () => import('./layout/auth/auth.module').then(m => AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
