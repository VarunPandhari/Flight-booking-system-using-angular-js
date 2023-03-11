import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  constructor(private router: Router) { }
  Go() {
    this.router.navigate(["bookservice"]);
  }

  ngOnInit(): void {
  }

}
