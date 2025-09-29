# Complete Node.js E-commerce Application

A full-featured e-commerce application built with Node.js, Express.js, and MySQL using Sequelize ORM.

## Features

- **Product Management**: Add, edit, delete, and view products
- **Shopping Cart**: Add products to cart, manage quantities
- **User Authentication**: User registration and login system
- **Admin Panel**: Administrative controls for product management
- **Database Integration**: MySQL database with Sequelize ORM
- **Template Engine**: EJS for dynamic HTML rendering
- **Responsive Design**: CSS styling for better user experience

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL with Sequelize ORM
- **Templates**: EJS (Embedded JavaScript)
- **Styling**: CSS3
- **Frontend**: HTML5, JavaScript

## Project Structure

```
00-starting-setup/
├── app.js                 # Main application file
├── controllers/           # Route controllers
│   ├── admin.js          # Admin functionality
│   ├── error.js          # Error handling
│   └── shop.js           # Shop functionality
├── data/                 # JSON data files
│   ├── cart.json         # Cart data
│   └── products.json     # Product data
├── models/               # Database models
│   ├── cart-items.js     # Cart items model
│   ├── cart.js           # Cart model
│   ├── product.js        # Product model
│   └── user.js           # User model
├── public/               # Static assets
│   ├── css/              # Stylesheets
│   └── js/               # JavaScript files
├── routes/               # Route definitions
│   ├── admin.js          # Admin routes
│   └── shop.js           # Shop routes
├── util/                 # Utility functions
│   ├── database.js       # Database configuration
│   └── path.js           # Path utilities
└── views/                # EJS templates
    ├── admin/            # Admin templates
    ├── includes/         # Partial templates
    └── shop/             # Shop templates
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
   - Update database configuration in `util/database.js`
   - The application will automatically create tables on first run

4. **Environment Variables**:
   Create a `.env` file with your database credentials:
   ```
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database_name
   ```

## Usage

1. **Start the Application**:
   ```bash
   npm start
   # or
   npm run start-server
   ```

2. **Access the Application**:
   - Open your browser and go to `http://localhost:3000`
   - Admin panel: `http://localhost:3000/admin`

## API Endpoints

### Shop Routes
- `GET /` - Home page
- `GET /products` - Product list
- `GET /products/:id` - Product details
- `GET /cart` - Shopping cart
- `POST /cart` - Add to cart
- `POST /cart-delete-item` - Remove from cart
- `GET /orders` - User orders
- `POST /create-order` - Create order

### Admin Routes
- `GET /admin/products` - Admin product list
- `GET /admin/add-product` - Add product form
- `POST /admin/add-product` - Add product
- `GET /admin/edit-product/:id` - Edit product form
- `POST /admin/edit-product` - Update product
- `POST /admin/delete-product` - Delete product

## Database Schema

### Users Table
- `id` (Primary Key)
- `name` (String)
- `email` (String)

### Products Table
- `id` (Primary Key)
- `title` (String)
- `price` (Decimal)
- `description` (Text)
- `imageUrl` (String)
- `userId` (Foreign Key)

### Carts Table
- `id` (Primary Key)
- `userId` (Foreign Key)

### CartItems Table
- `id` (Primary Key)
- `quantity` (Integer)
- `cartId` (Foreign Key)
- `productId` (Foreign Key)

## Key Features Explained

### 1. User Authentication
- Middleware to find user by ID
- User association with products and cart

### 2. Shopping Cart
- Many-to-many relationship between Cart and Product
- Quantity management for cart items

### 3. Admin Panel
- Product CRUD operations
- Administrative controls

### 4. Error Handling
- 404 error page for undefined routes
- Centralized error handling

## Development

### Adding New Features
1. Create new routes in appropriate route files
2. Add corresponding controllers
3. Update models if database changes are needed
4. Create/update EJS templates

### Database Migrations
The application uses Sequelize's `sync()` method for database synchronization. For production, consider using proper migrations.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
