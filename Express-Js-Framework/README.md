# Express.js Framework Demo

A basic Express.js application demonstrating fundamental web development concepts and routing.

## Features

- **Basic Routing**: GET and POST route handling
- **Static File Serving**: CSS and JavaScript file serving
- **Template Rendering**: HTML template rendering
- **Error Handling**: 404 error page for undefined routes
- **Middleware**: Body parsing and static file middleware

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3
- **Templates**: HTML templates
- **Middleware**: Body-parser

## Project Structure

```
Express-Js-Framework/
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── Public/                # Static assets
│   └── css/               # Stylesheets
│       └── style.css      # Main stylesheet
├── Routes/                # Route definitions
│   ├── admin.js           # Admin routes
│   ├── contact.js         # Contact routes
│   └── shop.js            # Shop routes
├── Templates/             # HTML templates
│   ├── admin.html         # Admin page
│   ├── contactus.html     # Contact page
│   ├── index.html         # Home page
│   ├── PageError.html     # 404 error page
│   └── success.html       # Success page
└── script.js              # Client-side JavaScript
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
- `GET /shop` - Shop page

#### Admin Routes
- `GET /admin` - Admin page
- `POST /admin` - Admin form submission

#### Contact Routes
- `GET /contactus` - Contact page
- `POST /contactus` - Contact form submission

### Template Pages

1. **Home Page** (`/`)
   - Main landing page
   - Navigation to other sections

2. **Shop Page** (`/shop`)
   - Product listing or shop interface

3. **Admin Page** (`/admin`)
   - Administrative interface
   - Form for admin operations

4. **Contact Page** (`/contactus`)
   - Contact form
   - User inquiry handling

5. **Success Page**
   - Confirmation page after form submission

6. **Error Page** (`PageError.html`)
   - 404 error handling
   - User-friendly error messages

## Code Structure

### Main Application (`app.js`)
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'Public')));

// Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

// Error handling
app.use('/', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'Templates', 'PageError.html'));
});

app.listen(3000);
```

### Route Structure
Each route file exports a router with specific endpoints:
- **admin.js**: Administrative functionality
- **contact.js**: Contact form handling
- **shop.js**: Shop and product functionality

## Static Assets

### CSS Styling
- `Public/css/style.css`: Main stylesheet
- Responsive design considerations
- Basic styling for forms and layout

### JavaScript
- `script.js`: Client-side functionality
- Form handling and user interactions

## Error Handling

The application includes:
- 404 error page for undefined routes
- Proper HTTP status codes
- User-friendly error messages

## Development

### Adding New Routes
1. Create a new route file in the `Routes/` directory
2. Define your routes using Express Router
3. Import and use the router in `app.js`

### Adding New Templates
1. Create HTML files in the `Templates/` directory
2. Update routes to render the new templates
3. Add corresponding CSS styling

### Middleware
The application uses:
- `body-parser`: For parsing form data
- `express.static`: For serving static files

## Learning Objectives

This project demonstrates:
- Basic Express.js setup
- Route handling and organization
- Static file serving
- Template rendering
- Middleware usage
- Error handling
- Project structure best practices

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
