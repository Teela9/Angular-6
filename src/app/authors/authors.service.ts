import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  fetchAuthors(){
    return ["A", "U", "T", "H", "O", "R", "S"];
  }
}
