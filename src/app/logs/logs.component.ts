import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { BookService } from '../service/book.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})

export class LogsComponent implements OnInit {

  displayedColumns: string[] = ['fullname','book_title','book_author','idate','status'];
  dataSource: MatTableDataSource<any[]>;
  public logs : any;
  public data : any;
  public books : any;
  constructor(
    private rout: Router,
    private route: ActivatedRoute,
    private User: UserService,
    private book: BookService, 
  ) { }

  ngOnInit() {
    this.getlogs()
    this.getUser()
    this.getBook()
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator
  }

  // get data of user logs
  getlogs(){
    console.log("Logs")
    this.User.get('getLogsTotal/').subscribe(res=>{ 
      this.logs = res;
      this.dataSource = new MatTableDataSource(this.logs);
    })
  }

  //filter on logs
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //selected User
  selectUser(event : any){
    console.log(event )
  }

  //for getting user data
  getUser(){
    this.User.get('getUser').subscribe(res=>{  
      this.data = res
    })
  }

  //for getting book
  getBook(){
    this.book.get('getBook').subscribe(res=>{  
      this.books = res
    })
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
  //return book
  returnBook(id: string)
  {
    let data= "id="+id
    this.book.post('returnBook/',data).subscribe(data=>{
      this.ngOnInit()
    });
  }
}
