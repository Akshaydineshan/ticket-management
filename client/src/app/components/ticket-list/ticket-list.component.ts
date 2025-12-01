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
}