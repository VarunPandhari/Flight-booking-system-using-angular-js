import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  book_tickets(s: any, d: any, ad: any, cd: any) {
    var total = 0;
    let members = 0;
    let namt = 0;
    let camt = 0;
    if (s == "hubli" && d == "banglore") {
      namt = 3000;
      camt = 1800;
      members = ad + cd;
      total = (namt * ad) + (camt * cd);
      if (members > 5) {
        total = total - (total * 0.15);
      }
    }
    if (s == "hubli" && d == "goa") {
      namt = 2500;
      camt = 1100;
      members = ad + cd;
      total = (namt * ad) + (camt * cd);
      if (members > 5) {
        total = total - (total * 0.15);
      }
    }
    if (s == "hubli" && d == "delhi") {
      namt = 7000;
      camt = 5800;
      members = ad + cd;
      total = (namt * ad) + (camt * cd);
      if (members > 5) {
        total = total - (total * 0.15);
      }
    }

    return total;
  }

  constructor() { }
}
