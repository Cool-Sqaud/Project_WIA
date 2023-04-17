import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

// Import Webpages (components)
import { HomeComponent } from './public/home/home.component';
import { ServicesComponent } from './public/services/services.component';
import { LoginComponent } from './public/login/login.component';
import { MonitoringWeerstationsComponent } from './employee/monitoring-weerstations/monitoring-weerstations.component';
import { LogoutComponent } from './public/logout/logout.component';
import { DashboardComponent } from './employee/dashboard/dashboard.component';
import { AuthGuard } from './_guard/auth.guard';
import { GebruikersAdministratieComponent } from './employee/gebruikers-administratie/gebruikers-administratie.component';
import { AbonnementAdministratieComponent } from './employee/abonnement-administratie/abonnement-administratie.component';
import { ContractregistratieComponent } from './employee/contractregistratie/contractregistratie.component';
import { EditUserComponent } from './employee/gebruikers-administratie/edit-user/edit-user.component';
import { AddUserComponent } from './employee/gebruikers-administratie/add-user/add-user.component';
import { DeleteUserComponent } from './employee/gebruikers-administratie/delete-user/delete-user.component';

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
    path: 'logout',
    component: LogoutComponent,
    title: 'Logout'
  },
  {
    path: 'test',
    component: MonitoringWeerstationsComponent,
    title: 'Monitoring Weerstations'
  },
  { // Employee Dashboard
    path: 'medewerker',
    children: [
      {
        path: '',
        component: DashboardComponent,
        title: 'Dashboard',
        canActivate: [AuthGuard],
        data: {
          authGuardNeedsLoggedIn: true,
          authGuardPermissionLevel: 1,
          authGuardRedirect: ''
        },
      },
      {
        path: 'gebruikers-administratie',
        component: GebruikersAdministratieComponent,
        title: 'Gebruikers Administratie',
        canActivate: [AuthGuard],
        data: {
          authGuardNeedsLoggedIn: true,
          authGuardPermissionLevel: 3,
          authGuardRedirect: 'medewerker'
        },
        children: [
          { path: 'add', component: AddUserComponent },
          { path: 'edit', component: EditUserComponent },
          { path: 'delete', component: DeleteUserComponent },
        ]
      },
      {
        path: 'abonnementen-administratie',
        component: AbonnementAdministratieComponent,
        title: 'Abonnementen Administratie',
        canActivate: [AuthGuard],
        data: {
          authGuardNeedsLoggedIn: true,
          authGuardPermissionLevel: 1,
          authGuardRedirect: 'medewerker'
        },
      },
      {
        path: 'monitoring-weerstation',
        component: MonitoringWeerstationsComponent,
        title: 'Monitoring Weerstations',
        canActivate: [AuthGuard],
        data: {
          authGuardNeedsLoggedIn: true,
          authGuardPermissionLevel: 2,
          authGuardRedirect: 'medewerker'
        },
      },
      {
        path: 'contractregistratie',
        component: ContractregistratieComponent,
        title: 'Contractregistratie',
        canActivate: [AuthGuard],
        data: {
          authGuardNeedsLoggedIn: true,
          authGuardPermissionLevel: 2,
          authGuardRedirect: 'medewerker'
        },
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
