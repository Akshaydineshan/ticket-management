# Ticket Management System

## Overview
The Ticket Management System is a full-stack application designed to streamline the process of managing IT tickets. It consists of an Angular frontend and a .NET 8 Web API backend, providing a seamless experience for users to create, view, and manage tickets.

## Features
- **User Authentication**: Secure login and session management for users.
- **Ticket Management**: Create, view, update, and delete tickets.
- **Dashboard**: A user-friendly dashboard displaying ticket statistics and navigation.
- **Responsive Design**: The application is designed to be responsive and user-friendly across devices.

## Technologies Used
- **Frontend**: Angular
- **Backend**: .NET 8 Web API
- **Database**: Entity Framework Core with a SQL Server database

## Project Structure
```
ticket-management-system
├── client                # Angular Frontend
│   ├── src
│   │   ├── app
│   │   │   ├── components
│   │   │   ├── services
│   │   │   ├── models
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   ├── environments
│   │   ├── main.ts
│   ├── angular.json
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── server                # .NET Backend
│   ├── Controllers
│   ├── Models
│   ├── Services
│   ├── Data
│   ├── appsettings.json
│   ├── Program.cs
│   ├── ticket-management-api.csproj
│   └── README.md
└── README.md             # Root Directory Documentation
```

## Setup Instructions

### Frontend
1. Navigate to the `client` directory.
2. Install dependencies using:
   ```
   npm install
   ```
3. Start the Angular development server:
   ```
   ng serve
   ```

### Backend
1. Navigate to the `server` directory.
2. Restore the NuGet packages:
   ```
   dotnet restore
   ```
3. Run the application:
   ```
   dotnet run
   ```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.