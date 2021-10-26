import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {
  
  bookList: any[]=[]; 
  
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    console.log("inside ngonit");
    this.booksService.getBooks()
      .subscribe((res: any)=>{
        console.log(res);
        this.bookList=res;
      });
  }

}
