# Ticket Management System

## Overview
The Ticket Management System is a full-stack application designed to help IT teams manage and track tickets efficiently. The system consists of an Angular frontend and a .NET 8 Web API backend.

## Features
- User authentication and authorization
- Create, read, update, and delete tickets
- View ticket details
- Sort and filter tickets by priority and status
- User dashboard for quick access to ticket management

## Technologies Used
- **Frontend**: Angular
- **Backend**: .NET 8 Web API
- **Database**: Entity Framework Core with SQL Server

## Getting Started

### Prerequisites
- Node.js and npm installed
- .NET 8 SDK installed
- SQL Server or any compatible database

### Setup Instructions

#### Frontend (Angular)
1. Navigate to the client directory:
   ```
   cd ticket-management-system/client
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Run the Angular application:
   ```
   ng serve
   ```
4. Open your browser and go to `http://localhost:4200`.

#### Backend (.NET 8 Web API)
1. Navigate to the server directory:
   ```
   cd ticket-management-system/server
   ```
2. Update the connection string in `appsettings.json` to match your database configuration.
3. Apply migrations to set up the database:
   ```
   dotnet ef database update
   ```
4. Run the .NET application:
   ```
   dotnet run
   ```
5. The API will be available at `http://localhost:5000`.

## Folder Structure
- **client**: Contains the Angular frontend application.
- **server**: Contains the .NET 8 Web API backend application.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.