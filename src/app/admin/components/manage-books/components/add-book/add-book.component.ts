import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  
  isSaved: boolean = false;

  //1 have form taf equivalent in ts
  addBookForm = new FormGroup({
    //2 have the form element equivalent in ts
    title:new FormControl('',Validators.required),
    isbn: new FormControl('',[Validators.required,Validators.minLength(10)]),//use validators.pattern to check for number
    year: new FormControl('',[Validators.required,Validators.max(2021),Validators.min(1400)]),
    author:new FormControl('',Validators.required),
    price:new FormControl('',[Validators.required,Validators.min(0)]),
    stock:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required),
    position:new FormControl('',Validators.required)

  });

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
  }

  handleAddBook():void{
    console.log('Submitting');
    console.log(this.addBookForm.value);

    this.bookService.createBook(this.addBookForm.value)
      .subscribe((res: any)=>{
        console.log(res);
        if(res && res.id==11){
          this.isSaved=true;
        }
      })
  }

}
