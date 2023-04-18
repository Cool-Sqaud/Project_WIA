import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLoggedIn: boolean = this.authService.isLoggedIn;
  role: Number = 0;

  constructor(
    private router: Router, 
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getPermissionLevel().subscribe(
      result => this.role = result
    )
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loginRefresh();
      }
    })
  }

  private loginRefresh = (): boolean => this.isLoggedIn = this.authService.refreshLoggedIn();
}
