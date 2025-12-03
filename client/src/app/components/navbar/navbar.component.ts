import { Component } from "@angular/core";


@Component({  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent {
  constructor() {}

  // Method to navigate to the dashboard
  navigateToDashboard() {
    // Logic for navigation to the dashboard
  }

  // Method to navigate to the ticket list
  navigateToTicketList() {
    // Logic for navigation to the ticket list
  }

  // Method to navigate to the ticket form
  navigateToTicketForm() {
    // Logic for navigation to the ticket form
  }

  // Method to handle user logout
  logout() {
    // Logic for user logout
  }
}