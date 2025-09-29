# Full Stack Book Appointment System

A comprehensive appointment booking system with user management and database integration.

## Features

- **User Management**: Add, edit, delete, and view users
- **Appointment Booking**: Book and manage appointments
- **Database Integration**: MySQL database with Sequelize ORM
- **RESTful API**: RESTful endpoints for all operations
- **CORS Support**: Cross-origin resource sharing enabled
- **Data Persistence**: All data is stored in the database

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL with Sequelize ORM
- **API**: RESTful API design
- **CORS**: Cross-origin resource sharing
- **Path**: Path utilities for file handling

## Project Structure

```
Full-Stack-Book-Apoinment/
├── app.js                 # Main application file
├── database.js            # Database configuration
├── models.js              # Database models
├── routes.js              # Route definitions
├── user.js                # User-specific functionality
├── package.json           # Dependencies and scripts
└── Templates/             # Frontend templates
    ├── index.html         # Main interface
    └── script.js          # Client-side JavaScript
```

## Installation

1. **Prerequisites**:
   - Node.js (v14 or higher)
   - MySQL database
   - npm or yarn

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Database Setup**:
   - Create a MySQL database
   - Update database configuration in `database.js`
   - The application will automatically create tables on first run

4. **Start the Application**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   - Open your browser and go to `http://localhost:3000`

## API Endpoints

### User Management
- `POST /user/add-user` - Add new user
- `GET /user/get-user` - Get all users
- `GET /user/delete-user/:id` - Delete user by ID
- `POST /user/edit-user/:id` - Edit user by ID

### Default Route
- `GET /` - Returns JSON error response for undefined routes

## Database Schema

### Users Table
- `id` (Primary Key, Auto Increment)
- `name` (String) - User's full name
- `email` (String) - User's email address
- `phone` (String) - User's phone number
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

## Usage

### Adding a User
```bash
POST /user/add-user
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890"
}
```

### Getting All Users
```bash
GET /user/get-user
```

### Editing a User
```bash
POST /user/edit-user/1
Content-Type: application/json

{
    "name": "John Smith",
    "email": "johnsmith@example.com",
    "phone": "123-456-7890"
}
```

### Deleting a User
```bash
GET /user/delete-user/1
```

## Frontend Interface

The application includes a simple HTML interface (`Templates/index.html`) with:
- Form for adding new users
- List display for existing users
- Edit and delete functionality
- Client-side JavaScript for API interactions

## Code Structure

### Main Application (`app.js`)
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const sequelize = require('./database');

const routes = require('./routes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({extends: false}));

// Routes
app.post('/user/add-user', routes.postAddUser);
app.get('/user/get-user', routes.getAddUser);
app.get('/user/delete-user/:id', routes.getDeleteById);
app.post('/user/edit-user/:id', routes.postEditById);

// Error handling
app.use('/', (req, res) => {
    res.json({error: 404});
});

// Database sync and server start
sequelize.sync()
.then(() => {
    app.listen(3000, () => {
        console.log("Core Enabled Server");
    });
})
.catch(err => console.log(err));
```

### Database Configuration (`database.js`)
- Sequelize configuration
- MySQL connection setup
- Database synchronization

### Models (`models.js`)
- User model definition
- Database table structure
- Sequelize model configuration

### Routes (`routes.js`)
- CRUD operation handlers
- Database interaction logic
- Response formatting

### User Module (`user.js`)
- User-specific functionality
- Additional user operations
- User validation logic

## Development

### Adding New Features
1. Update the model in `models.js` if needed
2. Add new routes in `routes.js`
3. Define new endpoints in `app.js`
4. Update the frontend interface

### Database Migrations
The application uses Sequelize's `sync()` method for database synchronization. For production, consider using proper migrations.

## Error Handling

- Database connection errors are logged
- API errors are handled gracefully
- CORS is properly configured for cross-origin requests
- 404 errors return JSON response

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
