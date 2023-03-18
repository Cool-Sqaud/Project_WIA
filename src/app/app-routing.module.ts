import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { // Homepage
    path: '',
    component: HomeComponent,
    data: { title: 'International Weather Agency'}
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent,
    data: { title: 'Subscriptions'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login'}
  },
  { // Redirect everything not found above (** is wildcard) to home
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
