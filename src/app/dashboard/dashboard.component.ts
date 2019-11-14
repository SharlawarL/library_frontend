import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { SearchpPipe } from '../pipe/searchp.pipe';
import { FormsModule }   from '@angular/forms';
import { UserModelComponent } from '../user-model/user-model.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchText: string = '';
  data : any;
  public classActive = "Home";
  public search = false;
  showFiller = false;
  constructor(
    private rout: Router,
    private route: ActivatedRoute,
    private User: UserService, 
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getUser()
  }

  showHome(){
    this.search = false
    this.classActive = "Home";
    this.rout.navigate(['Home'],{relativeTo: this.route});
  }
  showUser(){
    this.search = false
    this.classActive = "User";
    this.rout.navigate(['User'],{relativeTo: this.route});
  }
  showBooks(){
    this.search = false
    this.classActive = "Books";
    this.rout.navigate(['Books'],{relativeTo: this.route});
  }
  showLogs(){
    this.search = false
    this.classActive = "Logs";
    this.rout.navigate(['Logs'],{relativeTo: this.route});
  }
  showLogout(){
    this.rout.navigate(['/']);
  }

  searchUser(){
    this.search = true
    //this.rout.navigate(['Search'],{relativeTo: this.route});
  }

  getUser(){
    console.log("User data")
    this.User.get('getUser').subscribe(res=>{  
      this.data = res
      console.log(res);
    })
  }

  //open dialog box
  openDialog(User_id): void {
    const dialogRef = this.dialog.open(UserModelComponent,
      {
        width: '800px',
        data:{user_id:User_id}
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.ngOnInit();
    });
  }

}
