import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateMenuComponent} from './ui/meals/create-menu/create-menu.component';
import {LayoutComponent} from './ui/common/layout/layout.component';

const routes: Routes = [
  {path: 'crmenu', component: CreateMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
