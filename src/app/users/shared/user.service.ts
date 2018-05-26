import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from './user-model';

@Injectable()
export class UserService {
  usersList: AngularFireList<any>;
  selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.usersList = this.firebase.list('users');
    return this.usersList;
  }

  insertUser(user: User) {
    this.usersList.push({
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      age: user.age
    });
  }

  updateUser(user: User) {
    this.usersList.update(user.$key, {
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      age: user.age
    });
  }

  deleteUser($key: string) {
    this.usersList.remove($key);
  }
}