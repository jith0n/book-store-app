import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  readonly apiName = "https://localhost:44392/api/books";

  constructor(private http: HttpClient) { }

  getBooks(): any{
    console.log("inside serivices");
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.apiName ,{ headers: reqHeader })
      .pipe(map((res: any)=>{
        console.log(res);
        return res;
        
      }));
  }

  getBookById(bookId: string | null): any{
    console.log("inside serivices");
    let bookIdUrl = this.apiName+'/'+bookId;
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(bookIdUrl,{ headers: reqHeader })
      .pipe(map((res: any)=>{
        console.log(res);
        return res;
      }));
  }


}
