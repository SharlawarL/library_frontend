import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookService } from '../service/book.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';
import { BookModelComponent } from '../book-model/book-model.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent implements OnInit {

  public data : any;

  constructor(
    private rout: Router,
    private route: ActivatedRoute,
    private book: BookService, 
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getBook()
  }

  getBook(){
    this.book.get('getBook').subscribe(res=>{  
      this.data = res
      console.log(res);
    })
  }

  showAddbooks(){
    this.rout.navigate(['/Dashboard/AddBooks']);
  }

  openDialog(Book_id: string,Book_title:string,Author: string,Publication:string,Year:string,Quntity: string): void {
    const dialogRef = this.dialog.open(BookModelComponent,
      {
        width:'600px',
        height:'600px',
        data: {id:Book_id,title: Book_title,author:Author,publication:Publication,year:Year,quntity:Quntity}
      }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.ngOnInit();
    });
  }
}
