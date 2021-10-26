import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): any{
    console.log("inside serivices");
    return this.http.get("https://jsonplaceholder.typicode.com/users")
      .pipe(map((res: any)=>{
        console.log(res);
        return res;
      }));
      
  }

  updateBook(bookData: any): any{
    console.log("inside serivices");
    let bookIdUrl = `https://jsonplaceholder.typicode.com/photos/${bookData.id}`;
    return this.http.put(bookIdUrl,bookData)
      .pipe(map((res: any)=>{
        console.log(res);
        return res;
      }));
  }

  deleteBook(bookId: string | null): any{
    console.log("inside serivices");
    let bookIdUrl = `https://jsonplaceholder.typicode.com/photos/${bookId}`;
    return this.http.delete(bookIdUrl)
      .pipe(map((res: any)=>{
        console.log(res);
        return res;
      }));
  }
}
