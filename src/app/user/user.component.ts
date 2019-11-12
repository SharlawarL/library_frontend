import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { BookIssueComponent } from '../book-issue/book-issue.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public User_id = localStorage.getItem('User')
  public data : any;
  public logs : any;
  constructor(
    private rout: Router,
    private route: ActivatedRoute,
    private User: UserService, 
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log(this.User)
    this.getUser()
    this.getlogs()
    
  }

  //logout function
  showLogout(){
    localStorage.removeItem('User')
    this.rout.navigate(['/']);
  }
  // get data of user
  getUser(){
    this.User.get('getUserData/'+this.User_id).subscribe(res=>{  
      this.data = res
    })
  }
  // get data of user logs
  getlogs(){
    
    this.User.get('getlogs/'+this.User_id).subscribe(res=>{  
      console.log("logs")
      this.logs = res
      console.log(this.logs)
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookIssueComponent,
      {
        width: '500px',
        height: '500px'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.ngOnInit();
    });
  }

}
