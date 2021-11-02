import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  readonly apiName = "https://localhost:44332/api/books";

  constructor(private http: HttpClient) { }

  uploadImage(imgFile:any):any{
    console.log(imgFile);
    //create form data
    const formData = new FormData();

    //store form as "file" with file data
    formData.append("file", imgFile,imgFile.name);

    //make http post request with form data
    return this.http.post('https://localhost:44332/api/upload/image',formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  getBooks(): any{
    console.log("inside serivices");
    return this.http.get(this.apiName)
      .pipe(map((res: any)=>{
        console.log(res);
        return res;
      }));
      
  }

  updateBook(bookData: any): any{
    console.log("inside serivices");
    let bookIdUrl = this.apiName+'/'+bookData.id;
    return this.http.put(bookIdUrl,bookData)
      .pipe(map((res: any)=>{
        console.log(res);
        return res;
      }));
  }

  deleteBook(bookId: number | null): any{
    console.log("inside serivices");
    let bookIdUrl = this.apiName+'/'+bookId;
    return this.http.delete(bookIdUrl)
      .pipe(map((res: any)=>{
        console.log(res);
        return res;
      }));
  }

  createBook(formData: any): any{
    console.log(formData);

    return this.http.post("https://localhost:44332/api/books",formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
}
