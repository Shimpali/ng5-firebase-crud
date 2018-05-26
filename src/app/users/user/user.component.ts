import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.getData();
    this.resetForm();
  }

  onSubmit(userForm: NgForm) {
    if (userForm.value.$key == null)
      this.userService.insertUser(userForm.value);
    else
      this.userService.updateUser(userForm.value);
      this.resetForm(userForm);
    this.toastr.success('User Saved Successfully!', 'User Database');
  }

  resetForm(userForm: NgForm) {
    if (userForm != null)
      userForm.reset();
    this.userService.selectedUser = {
      $key: null,
      fname: '',
      lname: '',
      email: '',
      age: 0
    }
  }

}