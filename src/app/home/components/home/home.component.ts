import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bookList: any[] = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    
  }

}
