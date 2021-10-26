import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  bookList: any[]=[];
  dupBookData: any ;
  isUpdated = false;
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    console.log("inside ngOnit");
     this.bookService.getBooks()
       .subscribe((res: any)=>{
         console.log(res);
       this.bookList=res;
  });

}
handleEditModalOpen(passedDaata:any): void{
  this.dupBookData = { ...passedDaata  }; 
}

handleUpdateUser(): void{
  console.log(this.dupBookData); // submittable formdata

  this.bookService.updateBook(this.dupBookData)
    .subscribe( (res: any) => {
      console.log(res);
      if(res && res.id){
        this.isUpdated = true;
        this.bookList = res;
      }
    });
}

handleDeleteUser(): void{
  console.log(this.dupBookData); // submittable formdata

  this.bookService.deleteBook(this.dupBookData)
    .subscribe( (res: any) => {
      console.log(res);
      if(res && res.id){
        this.isUpdated = true;
        this.bookList = res;
      }
    });
}
}
