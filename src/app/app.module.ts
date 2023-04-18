import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './public/home/home.component';
import { ServicesComponent } from './public/services/services.component';
import { LoginComponent } from './public/login/login.component';
import { LogoutComponent } from './public/logout/logout.component';

import { DashboardComponent } from './employee/dashboard/dashboard.component';
import { GebruikersAdministratieComponent } from './employee/gebruikers-administratie/gebruikers-administratie.component';
import { AddUserComponent } from './employee/gebruikers-administratie/add-user/add-user.component';
import { AbonnementAdministratieComponent } from './employee/abonnement-administratie/abonnement-administratie.component';
import { MonitoringWeerstationsComponent } from './employee/monitoring-weerstations/monitoring-weerstations.component';
import { ContractregistratieComponent } from './employee/contractregistratie/contractregistratie.component';
import { ViewUserComponent } from './employee/gebruikers-administratie/view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServicesComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    GebruikersAdministratieComponent,
    AddUserComponent,
    ViewUserComponent,
    AbonnementAdministratieComponent,
    MonitoringWeerstationsComponent,
    ContractregistratieComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatGridListModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
