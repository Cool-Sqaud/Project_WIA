import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Shows: name, role (name), email, created_at, updated_at?
// Buttons: Edit, Delete, ResetPassword
//    Edit: Edit, name, role, email (makes them a form)
//    Delete: Confirmation -> deletes user
//    ResetPassword: Confirmation -> Sends back new (random) password

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{
  userForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    role_id: new FormControl(null, [Validators.required]),
  });
  selectedId: number = 0;
  // user: any;
  user: User = {"id":2,"role_id":0,"first_name":"Chloe","last_name":"Pagac","email":"hcole@example.net","created_at":"2023-04-13T17:12:01.000000Z","updated_at":"2023-04-13T17:12:01.000000Z"};
  
  // {{ user.first_name + ' ' + user.lastname }}

  errorMessage: string = 'Select a user';

  constructor (
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // this.userService.getUser(this.selectedId).subscribe(
    //   result => this.user = result as User,
    //   err => this.errorMessage = "Could not find user"
    // ) iHateNiggers
  } 
}
