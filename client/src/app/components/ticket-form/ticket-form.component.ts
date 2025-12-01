import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent {
  ticketForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private ticketService: TicketService) {
    this.ticketForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      const newTicket: Ticket = this.ticketForm.value;
      this.ticketService.createTicket(newTicket).subscribe(response => {
        console.log('Ticket created successfully', response);
        this.ticketForm.reset();
      }, error => {
        console.error('Error creating ticket', error);
      });
    }
  }
}