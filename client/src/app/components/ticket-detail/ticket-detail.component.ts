import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TicketService } from "src/app/services/ticket.service";


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent {
  ticketId!: number;
  ticketDetails: any;

  constructor(private ticketService: TicketService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ticketId = +params['id'];
      this.getTicketDetails();
    });
  }

  getTicketDetails(): void {
    this.ticketService.getTicketById(this.ticketId).subscribe(
      data => {
        this.ticketDetails = data;
      },
      error => {
        console.error('Error fetching ticket details', error);
      }
    );
  }

  deleteTicket() {
    this.ticketService.deleteTicket(this.ticketId).subscribe(
      response => {
        console.log('Ticket deleted successfully', response);
      },
      error => {
        console.error('Error deleting ticket', error);
      }
    );
  }

  editTicket() {
    // this.ticketService.updateTicket(this.ticketId, updatedData).subscribe(
    //   response => {
    //     console.log('Ticket updated successfully', response);
    //     this.ticketDetails = response; // Update local details
    //   },
    //   error => {
    //     console.error('Error updating ticket', error);
    //   }
    // );
  }
}