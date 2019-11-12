import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public loder = false;
  constructor(
    private book: BookService, 
    private router : Router
  ) { }

  ngOnInit() {
  }

  bookData(event: any){
    event.preventDefault()
    const target = event.target
    const title = target.querySelector('#title').value
    const author = target.querySelector('#author').value
    const publication = target.querySelector('#publication').value
    const year = target.querySelector('#year').value
    const quntity = target.querySelector('#qunitity').value
    let data = "book_title="+title+"&&book_author="+author+"&&book_publication="+publication+"&&publication_year="+year+"&&quntity="+quntity
    console.log(event)
    this.loder = true;
    this.book.post('addBook/',data).subscribe(data=>{
      if(data['success'])
      {
        console.log("success")
        this.router.navigate(['/Dashboard/Books'])
      }
      else
        console.log("failed")

    });
  }



}
