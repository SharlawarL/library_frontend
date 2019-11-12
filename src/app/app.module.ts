import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserViewComponent } from './user-view/user-view.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { LogsComponent } from './logs/logs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import { AddBookComponent } from './add-book/add-book.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BookModelComponent } from './book-model/book-model.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RegisterComponent } from './register/register.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { UserModelComponent } from './user-model/user-model.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SearchComponent } from './search/search.component';
import { SearchpPipe } from './pipe/searchp.pipe';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    UserViewComponent,
    BooksViewComponent,
    LogsComponent,
    AddBookComponent,
    AddUserComponent,
    DashboardHomeComponent,
    BookModelComponent,
    RegisterComponent,
    BookIssueComponent,
    UserModelComponent,
    SearchComponent,
    SearchpPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    MatTabsModule,
    SelectDropDownModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[SearchpPipe],
  entryComponents:[BookModelComponent,BookIssueComponent,UserModelComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
