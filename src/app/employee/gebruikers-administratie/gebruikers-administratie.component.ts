import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/interfaces';
import { animate, style, transition, trigger, state } from "@angular/animations";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gebruikers-administratie',
  templateUrl: './gebruikers-administratie.component.html',
  styleUrls: ['./gebruikers-administratie.component.css'],
})
export class GebruikersAdministratieComponent implements OnInit{
  usersFound = true;
  loadedUsers = false;
  appHeight = window.innerHeight - 200;
  users: Array<User> = [];

  constructor (
    private userService: UserService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe(res => {
      if (!res || res === true) this.usersFound = false;  
      else this.users = res;
      console.log(this.users)
      this.loadedUsers = true;
    });
    console.log(this.router.url);
  }

}
