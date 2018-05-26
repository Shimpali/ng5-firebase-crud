import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userList: User[];
  constructor(private userService: UserService,
  private toastr: ToastrService) { }

  ngOnInit() {
    var x = this.userService.getData();
    x.snapshotChanges().subscribe(
      item => {
        this.userList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.userList.push(y as User);
        });
      }
    );
  }

  onEdit(user: User){
    this.userService.selectedUser = Object.assign({},user);
  }

  onDelete(key:string) {
    if(confirm('Ayre you sure you want to delete this user?') == true){
    this.userService.deleteUser(key);
    this.toastr.warning("User Deleted!", "User Database");
  }
  }
}