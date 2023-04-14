import { environment as env } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Webpages (components)
import { HomeComponent } from './public/home/home.component';
import { ServicesComponent } from './public/services/services.component';
import { LoginComponent } from './public/login/login.component';
import { MonitoringAdministratieComponent } from './employee/monitoring-administratie/monitoring-administratie.component';

// Default Routing
const routes: Routes = [
  { // Homepage
    path: '',
    component: HomeComponent,
    title: 'International Weather Agency'
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Services'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'test',
    component: MonitoringAdministratieComponent,
    data: {title: 'Monitoring administratie'}
  },
  { // Employee Dashboard
    path: 'medewerker',
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Dashboard',
      },
      {
        path: 'test',
        component: MonitoringAdministratieComponent,
        title: 'Monitoring Administratie'
      },
      { // Redirect everything not found above (** is wildcard) to medewerker
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
  },
  { // Redirect everything not found above (** is wildcard) to home
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
