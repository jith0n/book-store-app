// export class User {
//     UserName: string;
//     Password: string;
//     Email: string;
// }


import { Injectable } from "@angular/core";

interface IUser{
  //id?: number;
  UserName: string;
  Password: string;
  Email: string;
}

// Decorator
@Injectable({
  providedIn: 'root'
})

export class User implements IUser{
  //id = 0;
  UserName = '';
  Password = '';
  Email = '';

  // util methods can be added here
}