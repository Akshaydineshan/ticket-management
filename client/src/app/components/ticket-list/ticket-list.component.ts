import { Component } from "@angular/core";
import { TicketService } from "src/app/services/ticket.service";


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',

})
export class TicketListComponent {
  tickets: any[] = [];
  sortedTickets: any[] = [];
  sortOrder: string = 'asc';

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.fetchTickets();
  }

  fetchTickets() {
    this.ticketService.getTickets().subscribe((data: any[]) => {
      this.tickets = data;
      this.sortTickets();
    });
  }

  sortTickets() {
    this.sortedTickets = this.tickets.sort((a, b) => {
      return this.sortOrder === 'asc' ? a.priority - b.priority : b.priority - a.priority;
    });
  }

  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortTickets();
  }

  viewDetails(ticketId: number) {
    // Logic to navigate to ticket detail view
  }
}