import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from './../../interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;
  
  constructor (
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser()
        .subscribe(result => this.user = result as User)
  }
}
