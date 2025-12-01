# Ticket Management System API

This is the backend for the IT Ticket Management System, built using .NET 8 Web API. The API provides endpoints for managing tickets and users, allowing for the creation, retrieval, updating, and deletion of tickets, as well as user authentication.

## Features

- **Ticket Management**: Create, read, update, and delete tickets.
- **User Management**: User registration and authentication.
- **Database Integration**: Uses Entity Framework Core for database operations.
- **RESTful API**: Follows REST principles for API design.

## Getting Started

### Prerequisites

- .NET 8 SDK
- A suitable database (e.g., SQL Server)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ticket-management-system/server
   ```

2. Restore the dependencies:
   ```
   dotnet restore
   ```

3. Update the `appsettings.json` file with your database connection string.

### Running the Application

To run the application, use the following command:
```
dotnet run
```

The API will be available at `http://localhost:5000`.

### API Endpoints

- **Tickets**
  - `GET /api/tickets`: Retrieve all tickets.
  - `GET /api/tickets/{id}`: Retrieve a specific ticket by ID.
  - `POST /api/tickets`: Create a new ticket.
  - `PUT /api/tickets/{id}`: Update an existing ticket.
  - `DELETE /api/tickets/{id}`: Delete a ticket.

- **Users**
  - `POST /api/users/login`: Authenticate a user.
  - `POST /api/users/register`: Register a new user.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.