import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Webpages (components)
import { HomeComponent } from './home/home.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LoginComponent } from './login/login.component';
import { MonitoringAdministratieComponent } from './employee/monitoring-administratie/monitoring-administratie.component';

// Default Routing
const defaultRoutes: Routes = [
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

// Employee Routing
const employeeRoutes: Routes = [
  { // Employee Dashboard
    path: '',
    component: HomeComponent,
    data: {title: 'Dashboard'}
  },
  {
    path: 'test',
    component: MonitoringAdministratieComponent,
    data: {title: 'Monitoring administratie'}
  }
];

// Customer Routing
const customerRoutes: Routes = [
  { // Customer Dashboard
    path: '',
    data: {title: 'Customer Dashboard'}
  }
];

const getDomain = () => {
  const hostname = window.location.hostname; // Gets (sub)domain
  if (hostname === 'medewerker.localhost') return employeeRoutes;
  // if (hostname === 'customer.localhost') return customerRoutes;
  return defaultRoutes;
}

@NgModule({
  imports: [RouterModule.forRoot(getDomain())],
  exports: [RouterModule]
})
export class AppRoutingModule { }
