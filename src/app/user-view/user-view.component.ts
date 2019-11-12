import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { BookIssueComponent } from '../book-issue/book-issue.component'
import { UserModelComponent } from '../user-model/user-model.component'

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  public data: any;

  constructor(
    private rout: Router,
    private User: UserService, 
    private router : Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getUser()
  }

  showAddUser(){
    this.rout.navigate(['/Dashboard/AddUser']);
  }
  getUser(){
    console.log("User data")
    this.User.get('getUser').subscribe(res=>{  
      this.data = res
      console.log(res);
    })
  }

  //for status change
  statusChange(id: string,status : string)
  {
      console.log(id+" "+status) 
      let data= "user_id="+id+"&&status="+status
      this.User.post('changeStatus',data).subscribe(res=>{  
         this.ngOnInit()
      })
  }

  //for status change
  deleteUser(id: string)
  {
      console.log(id+" "+status) 
      let data= "user_id="+id
      this.User.post('deleteUser',data).subscribe(res=>{  
         this.ngOnInit()
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
