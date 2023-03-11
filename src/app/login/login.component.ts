import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private a: AuthService, private router: Router) { }
  uname = "";
  pass = "";

  form_validate() {
    if (this.uname == "" || this.pass == "") {
      alert("Cannot be empty");
      return false;
    }
    return true;
  }
  Login() {
    this.form_validate();
    let r = this.a.validate(this.uname, this.pass);
    if (r == 1) {
      this.router.navigate(["book"]);
    }

  }

  ngOnInit(): void {
  }

}
