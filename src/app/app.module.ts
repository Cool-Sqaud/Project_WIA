import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './public/login/login.component';
import { ServicesComponent } from './public/services/services.component';

import { MonitoringAdministratieComponent } from './employee/monitoring-administratie/monitoring-administratie.component';
import { LogoutComponent } from './public/logout/logout.component';
import { DashboardComponent } from './employee/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServicesComponent,
    LoginComponent,
    MonitoringAdministratieComponent,
    LogoutComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
