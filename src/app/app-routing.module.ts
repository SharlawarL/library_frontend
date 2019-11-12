import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserViewComponent } from './user-view/user-view.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { LogsComponent } from './logs/logs.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddUserComponent } from './add-user/add-user.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path : '',
    component:LoginComponent
  },
  {
    path : 'Dashboard',
    component:DashboardComponent,
    children:[
      { path:'Home', component: DashboardHomeComponent },
      { path:'User', component: UserViewComponent },
      { path:'Books', component: BooksViewComponent },
      { path:'Logs', component: LogsComponent },
      { path:'AddBooks', component: AddBookComponent },
      { path:'AddUser', component: AddUserComponent },
      { path:'Search', component: SearchComponent }
    ]
  },
  {
    path : 'UserHome',
    component:UserComponent
  },
  {
    path : 'Search',
    component:SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
