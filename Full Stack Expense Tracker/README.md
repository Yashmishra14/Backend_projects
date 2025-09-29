# Full Stack Expense Tracker

A simple expense tracking application with database integration and CRUD operations.

## Features

- **Expense Management**: Add, edit, delete, and view expenses
- **Database Integration**: MySQL database with Sequelize ORM
- **RESTful API**: RESTful endpoints for expense operations
- **CORS Support**: Cross-origin resource sharing enabled
- **Data Persistence**: Expenses are stored in the database

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL with Sequelize ORM
- **API**: RESTful API design
- **CORS**: Cross-origin resource sharing

## Project Structure

```
Full Stack Expense Tracker/
├── app.js                 # Main application file
├── database.js            # Database configuration
├── models.js              # Database models
├── routes.js              # Route definitions
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

### Expense Management
- `POST /add-product` - Add new expense
- `GET /get-product` - Get all expenses
- `POST /edit-product/:id` - Edit existing expense
- `GET /delete-product/:id` - Delete expense

### Default Route
- `GET /` - Returns "HELLO WORLD" message

## Database Schema

### Expenses Table
- `id` (Primary Key, Auto Increment)
- `amount` (Decimal) - Expense amount
- `description` (String) - Expense description
- `category` (String) - Expense category
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

## Usage

### Adding an Expense
```bash
POST /add-product
Content-Type: application/json

{
    "amount": 50.00,
    "description": "Grocery shopping",
    "category": "Food"
}
```

### Getting All Expenses
```bash
GET /get-product
```

### Editing an Expense
```bash
POST /edit-product/1
Content-Type: application/json

{
    "amount": 75.00,
    "description": "Updated grocery shopping",
    "category": "Food"
}
```

### Deleting an Expense
```bash
GET /delete-product/1
```

## Frontend Interface

The application includes a simple HTML interface (`Templates/index.html`) with:
- Form for adding new expenses
- List display for existing expenses
- Edit and delete functionality
- Client-side JavaScript for API interactions

## Code Structure

### Main Application (`app.js`)
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({extends: false}));

// Routes
app.post('/add-product', routes.postAddProudct);
app.get('/get-product', routes.getAddProudct);
app.post('/edit-product/:id', routes.postEditProudct);
app.get('/delete-product/:id', routes.getDeleteProudct);

// Default route
app.use('/', (req, res) => {
    res.send("HELLO WORLD");
});

// Database sync and server start
db.sync()
.then(() => {
    app.listen(3000);
})
.catch(err => console.log(err));
```

### Database Configuration (`database.js`)
- Sequelize configuration
- MySQL connection setup
- Database synchronization

### Models (`models.js`)
- Expense model definition
- Database table structure
- Sequelize model configuration

### Routes (`routes.js`)
- CRUD operation handlers
- Database interaction logic
- Response formatting

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
