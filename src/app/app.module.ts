import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserService } from './users/shared/user.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [BrowserModule,
  FormsModule,
  BrowserAnimationsModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireDatabaseModule,
  ToastrModule.forRoot()],
  declarations: [AppComponent, UsersComponent, UserComponent, UsersListComponent],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule { }
