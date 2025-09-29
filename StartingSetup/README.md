# Node.js Starting Setup

A learning project demonstrating Node.js fundamentals with file-based data storage and basic web development concepts.

## Features

- **Product Management**: Add, edit, and view products
- **File-based Storage**: JSON file storage for data persistence
- **Template Rendering**: EJS template engine for dynamic content
- **Static File Serving**: CSS and JavaScript file serving
- **Basic Routing**: Express.js routing with middleware
- **Error Handling**: 404 error page for undefined routes

## Tech Stack

- **Backend**: Node.js, Express.js
- **Templates**: EJS (Embedded JavaScript)
- **Storage**: JSON files
- **Styling**: CSS3
- **Frontend**: HTML5, JavaScript

## Project Structure

```
StartingSetup/
├── app.js                 # Main application file
├── Controller/            # Route controllers
│   └── products.js        # Product management logic
├── Database/              # Data storage
│   └── Products.txt       # Product data file
├── Models/                # Data models
│   └── products.js        # Product model
├── public/                # Static assets
│   ├── css/               # Stylesheets
│   │   ├── forms.css      # Form styling
│   │   ├── main.css       # Main stylesheet
│   │   └── product.css    # Product-specific styling
│   └── js/                # JavaScript files
├── routes/                # Route definitions
│   ├── admin.js           # Admin routes
│   └── shop.js            # Shop routes
├── util/                  # Utility functions
│   └── path.js            # Path utilities
└── views/                 # EJS templates
    ├── 404.ejs            # Error page
    ├── add-product.ejs    # Add product form
    ├── contactus.ejs      # Contact page
    ├── includes/          # Partial templates
    │   ├── end.ejs        # Footer template
    │   ├── head.ejs       # Header template
    │   └── navigation.ejs  # Navigation template
    ├── shop.ejs           # Shop page
    └── success.ejs        # Success page
```

## Installation

1. **Prerequisites**:
   - Node.js (v14 or higher)
   - npm or yarn

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Application**:
   ```bash
   npm start
   ```

4. **Access the Application**:
   - Open your browser and go to `http://localhost:3000`

## Usage

### Available Routes

#### Shop Routes
- `GET /` - Home page
- `GET /shop` - Shop page with product list
- `GET /contactus` - Contact page

#### Admin Routes
- `GET /admin/add-product` - Add product form
- `POST /admin/add-product` - Add product
- `GET /admin/products` - Admin product list

### Product Management

1. **Adding Products**:
   - Navigate to `/admin/add-product`
   - Fill in product details (title, price, description, image URL)
   - Submit the form to add the product

2. **Viewing Products**:
   - Visit `/shop` to see all products
   - Products are displayed with details and styling

3. **Data Storage**:
   - Products are stored in `Database/Products.txt`
   - Data persists between server restarts

## Code Structure

### Main Application (`app.js`)
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Error handling
app.use(errorController.get404);

app.listen(3000);
```

### Product Model (`Models/products.js`)
- Product data structure
- File-based data operations
- CRUD operations for products

### Controllers (`Controller/products.js`)
- Business logic for product operations
- Data validation and processing
- Response handling

### Routes
- **Admin Routes** (`routes/admin.js`): Product management
- **Shop Routes** (`routes/shop.js`): Product display and navigation

## Template System

### EJS Templates
- **Layout Templates**: `includes/head.ejs`, `includes/navigation.ejs`, `includes/end.ejs`
- **Page Templates**: `shop.ejs`, `add-product.ejs`, `contactus.ejs`
- **Error Templates**: `404.ejs`

### Template Features
- Dynamic content rendering
- Partial template inclusion
- Form handling and validation
- Responsive design

## Static Assets

### CSS Styling
- **Main Stylesheet** (`main.css`): Global styles
- **Form Styles** (`forms.css`): Form-specific styling
- **Product Styles** (`product.css`): Product display styling

### JavaScript
- Client-side functionality
- Form handling
- User interactions

## Data Storage

### File-based Storage
- Products stored in `Database/Products.txt`
- JSON format for easy parsing
- Simple file operations for CRUD

### Data Structure
```json
[
  {
    "id": 1,
    "title": "Product Name",
    "price": 29.99,
    "description": "Product description",
    "imageUrl": "path/to/image.jpg"
  }
]
```

## Development

### Adding New Features
1. Create new routes in appropriate route files
2. Add corresponding controllers
3. Create EJS templates for new pages
4. Update the main application file

### Template Development
1. Use partial templates for common elements
2. Implement responsive design
3. Add form validation and error handling

### Data Management
1. Extend the product model for new fields
2. Update file operations for new data structure
3. Implement data validation

## Learning Objectives

This project demonstrates:
- Basic Express.js setup
- Template engine usage (EJS)
- File-based data storage
- Static file serving
- Route organization
- Middleware usage
- Error handling
- Basic web development concepts

## Limitations

- File-based storage (not suitable for production)
- No database integration
- Basic error handling
- No user authentication
- No data validation

## Future Enhancements

- Database integration (MySQL, MongoDB)
- User authentication and authorization
- Data validation and sanitization
- API endpoints
- Real-time updates
- Image upload functionality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
