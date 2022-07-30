import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./controllers/home/home.module').then(mod => mod.HomeModule)
  // },
  // {
  //   path: 'app',
  //   loadChildren: () => import('./controllers/account/account.module').then(mod => mod.AccountModule)
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./controllers/admin/admin.module').then(mod => mod.AdminModule)
  // },
  // {
  //   path: 'shared',
  //   loadChildren: () => import('./shared/shared.module').then(mod => mod.SharedModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
