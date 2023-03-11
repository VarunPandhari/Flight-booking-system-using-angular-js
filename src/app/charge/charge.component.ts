import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TicketService } from '../ticket.service';


@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.css']
})
export class ChargeComponent implements OnInit {
  source = "hubli";
  dest = "goa";
  ano = 0;
  cno = 0;
  tot = 0;
  msg = "No bookings yet !";
  constructor(private router: Router, private b: TicketService) { }
  BookTickets() {
    this.tot = this.b.book_tickets(this.source, this.dest, this.ano, this.cno);

    this.msg = "Booking successfull !";
    return true;
  }

  ngOnInit(): void {
  }

}
