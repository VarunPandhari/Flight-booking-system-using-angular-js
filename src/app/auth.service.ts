import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  validate(u: String, p: String) {
    if (u == "Varun" && p == "123") {
      return 1;
    }
    else {
      alert("Invalid");
      return;
    }
  }

  constructor() { }
}
