import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-logout',
  template: '<p>loggin out</p>'
})
export class LogoutComponent implements OnInit{
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
      this.auth.logout();
      this.router.navigate([''])
  }
}
