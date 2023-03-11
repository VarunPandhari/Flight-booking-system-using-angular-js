import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-bookservice',
  templateUrl: './bookservice.component.html',
  styleUrls: ['./bookservice.component.css']
})
export class BookserviceComponent implements OnInit {


  constructor(private router: Router) { }
  Move() {
    this.router.navigate(["charge"]);
  }


  ngOnInit(): void {
  }

}
