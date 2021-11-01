import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  loading : boolean = false;
  isSaved: boolean = false;
  isUploaded :boolean = false;
  imgUploadedUrl : any = null;
  imgFile : File |null = null;

  addImageForm = new FormGroup({
    image : new FormControl('',Validators.required)
  })

  //1 have form taf equivalent in ts
  addBookForm = new FormGroup({
    //2 have the form element equivalent in ts
    "title":new FormControl('',Validators.required),
    "isbn": new FormControl('',[Validators.required,Validators.minLength(10)]),//use validators.pattern to check for number
    "year": new FormControl('',[Validators.required,Validators.max(2021),Validators.min(1400)]),
    "author":new FormControl('',Validators.required),
    "price":new FormControl('',[Validators.required,Validators.min(0)]),
    "stock":new FormControl('',Validators.required),
    "description":new FormControl('',Validators.required),
    "status":new FormControl('',Validators.required),
    "position":new FormControl('',Validators.required),
    "Categoryid": new FormControl('',Validators.required),
    "image":new FormControl('')
  });

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
  }

  onChange(event :any):void{
    this.imgFile = event.target.files[0];
    this.isUploaded = false;
    console.log(this.imgFile);
  }

  handleAddImage():void{
    console.log('uploading image');
    this.loading = !this.loading;
    console.log(this.imgFile);

    if (!this.isUploaded){
    this.bookService.uploadImage(this.imgFile)
    .subscribe((res: any)=>{
        console.log(res);
        if (typeof(res) == "object"){
          this.imgUploadedUrl = res[0];
          this.loading = false;
          this.isUploaded = true;
          this.addBookForm.value.image = this.imgUploadedUrl;
          console.log(this.addBookForm.value);
        }
      });
    }
    this.loading = false;
  }



  handleAddBook():void{
    console.log('Submitting');
    console.log(this.addBookForm.value);
    this.addBookForm.value.image = this.imgUploadedUrl;

     let bookSample ={
      "CategoryId": this.addBookForm.value.Categoryid,
      "Title": this.addBookForm.value.title,
      "ISBN": this.addBookForm.value.isbn,
      "Year": this.addBookForm.value.year,
      "Price": this.addBookForm.value.price,
      "Description": this.addBookForm.value.description,
      "Position": this.addBookForm.value.position,
      "Status": this.addBookForm.value.status ,
      "image": this.imgUploadedUrl,
      "author": this.addBookForm.value.author,
      "Stock": this.addBookForm.value.stock
    };
    //create book
    console.log(bookSample);
    this.bookService.createBook(bookSample)
      .subscribe((res: any)=>{
        console.log(res);
        if(res){
          this.isSaved=true;
        }
      });
  }

}
