# Inventory Management System

A comprehensive inventory management system for shops and businesses with product management and purchase functionality.

## Features

- **Product Management**: Add, edit, and view products
- **Inventory Tracking**: Track product quantities and availability
- **Purchase Functionality**: Buy products and update inventory
- **Database Integration**: MySQL database with Sequelize ORM
- **RESTful API**: RESTful endpoints for all operations
- **CORS Support**: Cross-origin resource sharing enabled

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL with Sequelize ORM
- **API**: RESTful API design
- **CORS**: Cross-origin resource sharing

## Project Structure

```
Inventry-Management-Node-js-Test/
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

### Product Management
- `GET /getProducts` - Get all products
- `POST /addProduct` - Add new product
- `POST /editProduct/:id` - Edit existing product
- `POST /buyProduct/:id` - Buy product (purchase functionality)

## Database Schema

### Products Table
- `id` (Primary Key, Auto Increment)
- `name` (String) - Product name
- `description` (Text) - Product description
- `price` (Decimal) - Product price
- `quantity` (Integer) - Available quantity
- `category` (String) - Product category
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

## Usage

### Getting All Products
```bash
GET /getProducts
```

### Adding a Product
```bash
POST /addProduct
Content-Type: application/json

{
    "name": "Laptop",
    "description": "High-performance laptop",
    "price": 999.99,
    "quantity": 10,
    "category": "Electronics"
}
```

### Editing a Product
```bash
POST /editProduct/1
Content-Type: application/json

{
    "name": "Updated Laptop",
    "description": "Updated description",
    "price": 1099.99,
    "quantity": 15,
    "category": "Electronics"
}
```

### Buying a Product
```bash
POST /buyProduct/1
Content-Type: application/json

{
    "quantity": 2
}
```

## Frontend Interface

The application includes a simple HTML interface (`Templates/index.html`) with:
- Form for adding new products
- List display for existing products
- Edit and purchase functionality
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
app.get('/getProducts', routes.getProducts);
app.post('/addProduct', routes.postAddProduct);
app.post('/editProduct/:id', routes.postEditProduct);
app.post('/buyProduct/:id', routes.postBuyProduct);

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
- Product model definition
- Database table structure
- Sequelize model configuration

### Routes (`routes.js`)
- CRUD operation handlers
- Database interaction logic
- Response formatting

## Key Features Explained

### 1. Product Management
- Add new products with details
- Edit existing product information
- View all products in the system

### 2. Inventory Tracking
- Track product quantities
- Monitor stock levels
- Update inventory after purchases

### 3. Purchase Functionality
- Buy products from inventory
- Update quantities after purchase
- Track purchase history

### 4. Database Integration
- Persistent data storage
- Relational database design
- Data integrity and consistency

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

## Use Cases

This inventory management system is suitable for:
- Small to medium retail shops
- Warehouse management
- Product catalog management
- Stock tracking and monitoring
- Purchase order processing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
