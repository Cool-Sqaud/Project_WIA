import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLoggedIn: boolean = this.auth.isLoggedIn;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loginRefresh();
      }
    })
  }

  private loginRefresh = (): boolean => this.isLoggedIn = this.auth.refreshLoggedIn();
}
