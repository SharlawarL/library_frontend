import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BooksViewComponent } from '../books-view/books-view.component';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-model',
  templateUrl: './book-model.component.html',
  styleUrls: ['./book-model.component.css']
})
export class BookModelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BookModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public book: BookService
  ) { }

  ngOnInit() {
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  //update book
  updateBook(event : any){
    console.log("update Book")
    event.preventDefault()
    const target = event.target
    let data = "book_id="+target.querySelector('#id').value+"&&book_title="+target.querySelector('#title').value+"&&book_author="+target.querySelector('#author').value+"&&book_publication="+target.querySelector('#publication').value+"&&publication_year="+target.querySelector('#year').value+"&&quntity="+target.querySelector('#quntity').value
    this.book.post('updateBook/',data).subscribe(data=>{
      this.ngOnInit()
      this.dialogRef.close();
    });
  }

}
