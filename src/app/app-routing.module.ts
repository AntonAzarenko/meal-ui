import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateMenuComponent} from './ui/meals/create-menu/create-menu.component';
import {BookerComponent} from './ui/booker/booker.component';
import {AuthComponent} from './ui/common/auth/auth.component';
import {RegistrationComponent} from './ui/common/auth/registration/registration.component';

const routes: Routes = [
  {path: 'menu/edit', component: CreateMenuComponent},
  {path: 'booker', component: BookerComponent},
  {path: 'login', component: AuthComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
