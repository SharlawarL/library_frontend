import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../service/user.service';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-user-model',
  templateUrl: './user-model.component.html',
  styleUrls: ['./user-model.component.css']
})
export class UserModelComponent implements OnInit {

  public userData : any;
  public logs : any;
  public books : any;

  constructor(
    public dialogRef: MatDialogRef<UserModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private User: UserService, 
    private book: BookService, 
  ) { }

  ngOnInit() {
    this.getUser()
    this.getlogs()
    this.getBook()
  }

  //to close model box
  closeBox(): void {
    this.dialogRef.close();
  }

  // get data of user
  getUser(){
    this.User.get('getUserData/'+this.data.user_id).subscribe(res=>{  
      this.userData = res
    })
  }
  // get data of user logs
  getlogs(){
    
    this.User.get('getlogs/'+this.data.user_id).subscribe(res=>{  
      this.logs = res
    })
  }

  //for getting book
  getBook(){
    this.book.get('getBook').subscribe(res=>{  
      this.books = res
    })
  }

  //return book
  returnBook(id: string)
  {
    let data= "id="+id
    this.book.post('returnBook/',data).subscribe(data=>{
      this.ngOnInit()
    });
  }

  //issue book
  issueBook(event : any)
  {
    event.preventDefault()
    const target = event.target
    let data= "user_id="+target.querySelector('#User').value+"&&book_id="+target.querySelector('#Book').value
    this.book.post('issueBook/',data).subscribe(data=>{
      this.ngOnInit()
    });
  }

}
