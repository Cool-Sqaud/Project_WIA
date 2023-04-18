import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/interfaces';
import { animate, style, transition, trigger, state } from "@angular/animations";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gebruikers-administratie',
  templateUrl: './gebruikers-administratie.component.html',
  styleUrls: ['./gebruikers-administratie.component.css'],
  // animations: [
  //   trigger('mainInOut', [
  //     state('in', style({
  //       overflow: 'hidden',
  //       transform: 'translate(0%)',
  //       width: '60%'
  //     })),
  //     state('out', style({
  //       overflow: 'hidden',
  //       transform: 'translate(-50%)',
  //       width: '30%'
  //     })),
  //     transition('in => out', animate('1000ms ease')),
  //     transition('out => in', animate('1000ms ease'))
  //   ]),
  //   trigger('viewInOut', [
  //     state('in', style({
  //       overflow: 'hidden',
  //       width: '60%'
  //     })),
  //     state('out', style({
  //       opacity: '0',
  //       overflow: 'hidden',
  //       width: '0%'
  //     })),
  //     transition('in => out', animate('400ms ease-in-out')),
  //     transition('out => in', animate('400ms ease-in-out'))
  //   ])
  // ]
})
export class GebruikersAdministratieComponent implements OnInit{
  usersFound = true;
  loading = true;
  users: Array<User> = [];

  mainComponent = 'in';
  viewComponent = 'out';

  constructor (
    private userService: UserService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe(res => {
      if (!res || res === true) this.usersFound = false;  
      else this.users = res;
      this.loading = false;
    });
    console.log(this.router.url);
  }

  toggleView(): void {
    [this.mainComponent, this.viewComponent] = [this.viewComponent, this.mainComponent];
    this.router.navigate([{ outlets: {details: ['add']}}]);
    console.log(this.mainComponent, this.viewComponent);
  }
  
}
